/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OrderController.manage()`
   */


  manage: function (req, res) {
    var result = {
      admin: req.session.user
    };
    var skip = 0;
    var page = 1;

    if ( req.query.hasOwnProperty('page') ){
      skip = (req.query.page - 1) * 10;
      page = req.query.page;
    }

    var queryOptions = {
      where: {},
      skip: skip,
      limit: 10,
      sort: 'createdAt DESC'
    };

    result.page = page;

    async.waterfall([
      function GetTotalCount (next) {
        Order.count(function (err, num) {
          if (err) return next (err);

          result.pages = [];

          for ( var i = 0, count = parseInt(num/queryOptions.limit); i <= count; i++ ) {
            result.pages.push(i+1);
          }

          return next(null);
        });
      },

      function GetOrders (next) {
        Order.find(queryOptions, function (err, orders) {
          if (err) next (err);

          result.orders = orders;

          return next(null);
        });
      },

      function GetEditProduct (next) {
        if ( !req.params.hasOwnProperty('id') ) {
          return next(null);
        }

        Order.findOne(req.params.id, function (err, order) {
          if (err) next (err);
          result.edit = order;

          return next(null);
        });
      }
    ], function (err) {
      if (err) return res.serverError(err);


      result.templateToInclude  = 'adminOrderManager';
      // res.json(result);
      return res.view('back/menu.ejs', result);
    });
  },

  /**
   * `OrderController.list()`
   */
  list: function (req, res) {
    return res.json({
      todo: 'list() is not implemented yet!'
    });
  }
};


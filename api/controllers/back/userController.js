/**
 * Admin/userController
 *
 * @description :: Server-side logic for managing admin/users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `Admin/userController.profile()`
   */





  profile: function (req, res) {
    var result = {};
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

    result.order = {};



    // we check if the session id user is set.


    if ( req.session.user && req.session.user.id )
    {}
    else {


      // if not set we go to the login page


      return res.redirect('/login');

    }


    async.waterfall([
      function GetTotalCount (next) {




        Order.count({ owner: req.session.user.id }, function (err, num) {
          if (err) return next (err);

          result.pages = [];

          for ( var i = 0, count = parseInt(num/queryOptions.limit); i <= count; i++ ) {
            result.pages.push(i+1);
          }

          return next(null);
        });
      },

      function GetUserAndOrders (next) {

        console.info('user id ', req.session.user.id);


        User.findOne(req.session.user.id).populate('orders', queryOptions).exec(function (err, user) {
          if (err) return next (err);
          if (!user) return next ('NO_USER_FOUND');

          result.user = user;
          result.cart = req.session.cart;
          result.orders = user.orders;

          return next(null);
        });
      }
    ], function (err) {
      if (err) return res.serverError (err);

      result.templateToInclude  = 'adminUserProfile';

      return res.view('back/menu.ejs', result);
    });
  },

};


/**
 * Admin/productController
 *
 * @description :: Server-side logic for managing admin/products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `Admin/productController.new()`
   */
  new: function (req, res) {



    var result = {};

    result.templateToInclude = 'product';


    return res.view('admin/menu.ejs', result);



   /* return res.json({
      todo: 'new() is not implemented yet!'
    });*/
  },


  detail: function (req, res) {
    var result = {
      user: (req.session.hasOwnProperty('user')) ? req.session.user : undefined
    };

    async.waterfall([
      function GetProduct (next)  {
        Product.findOne(req.params.id, function (err, product) {
          if (err) return res.serverError(err);
          if (!product) return res.serverError('NO_PRODUCT_FOUND');

          // URLIFY
          //product.description = Urlify(product.description);

          result.cart = req.session.cart;
          result.product = product;

          return next(null, result);
        });
      }
    ], function (err, result) {
      if (err) res.serverError (err);

      return res.view('admin/product/detail.ejs', result);
    });
  },


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
        Product.count(function (err, num) {
          if (err) return next (err);

          result.pages = [];

          for ( var i = 0, count = parseInt(num/queryOptions.limit); i <= count; i++ ) {
            result.pages.push(i+1);
          }

          return next(null);
        });
      },

      function GetProducts (next) {
        Product.find(queryOptions, function (err, products) {
          if (err) next (err);

          result.products = products;

          return next(null);
        });
      },

      function GetEditProduct (next) {
        if ( !req.params.hasOwnProperty('id') ) {
          return next(null);
          return;
        }

        Product.findOne(req.params.id, function (err, product) {
          if (err) next (err);
          result.edit = product;

          return next(null);
        });
      }
    ], function (err) {
      if (err) return res.serverError(err);


      result.templateToInclude = 'adminProductManager';



      return res.view('admin/menu.ejs', result);
    });
  },


  edit: function (req, res, id) {

    var result ={};
    // we take the id of the product and get all the product details to set the template

//     console.info('modification product - req: ', req);

    console.info('modification product id: ', req.params.id);


    console.info( req.params.id.length);


    if ( req.params.id && (req.params.id.length > 0 ))
    {


      // we retrieve the product informations


      var productId = req.params.id;

      var queryOptions = {
        where: {id:productId },
//         skip: skip,
        limit: 10,
        sort: 'createdAt DESC'
      };

      Product.find(queryOptions, function (err, products) {
        if (err) next (err);



        result.product = {};

        result.product = products[0];

        console.info('edit query result', products);

        console.info('edit - result', result);


        result.templateToInclude = 'productModification';


        return res.view('admin/menu.ejs', result);
   //      return next(null);
      });







    }
    else{

      result.templateToInclude = 'productModification';


      return res.view('admin/menu.ejs', result);


    }


 //    alert(id);




    // if ( req.query.)








    /* return res.json({
     todo: 'new() is not implemented yet!'
     });*/
  },

};

function Urlify (text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
  });
};


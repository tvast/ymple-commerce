
module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

 
    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     *  If a request to a URL doesn't match any of the custom routes above, it  *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

    // ADMIN
    'GET    /admin'               : 'admin/AdminController.index',

    'GET    /admin/product/new': {view: 'admin/product/new'},

    'GET    /admin/menu': {view: 'admin/menu'},

    // create the new product in db 
    '/admin/product/new/validation': 'admin/AdminController.productNewValidation',



    //'admin/AdminController.productCreate',

    'GET    /admin/product'       : 'admin/AdminController.product',
    'GET    /admin/product/:id'   : 'admin/AdminController.product',
    'GET    /admin/order'         : 'admin/AdminController.order',
    'GET    /admin/user'          : 'admin/AdminController.user'


};

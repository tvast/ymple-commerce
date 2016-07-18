
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

    // INDEX
    'GET    /'                    : 'ProductController.list',
    'GET    /login'               : { view: 'login' },
    'GET    /account'             : { view: 'account'},

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
    'GET    /admin'               : 'AdminController.index',

    'GET    /admin/product/create': 'AdminController.productCreate',

    'GET    /admin/product'       : 'AdminController.product',
    'GET    /admin/product/:id'   : 'AdminController.product',
    'GET    /admin/order'         : 'AdminController.order',
    'GET    /admin/user'          : 'AdminController.user'


};

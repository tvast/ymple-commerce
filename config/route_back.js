
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
    // old with menu toogle 'GET    /admin'               : 'back/AdminController.index',

    'GET    /admin'               : 'back/AdminController.menu',
    'GET    /admin/product/create': 'back/productController.create',
    'GET    /admin/menu': 'back/AdminController.menu',

    // create the new product in db 
    '/admin/product/new/validation': 'back/AdminController.productNewValidation',
    'GET    /admin/product/manager'       : 'back/productController.manage',// display all the product available
    'GET    /admin/product/preview/:id'   : 'back/productController.detail',// display the detail about one product
    'GET    /admin/product/edit/:id'   : 'back/productController.edit',// edit the product

    // url to use the profile of the admin user
    'GET    /admin/profile': 'back/userController.profile',

    //'admin/AdminController.productCreate',

    'GET    /admin/category/list'       : 'back/CategoryController.list',
    'GET    /admin/category/create'       : 'back/CategoryController.create',

    'GET    /admin/order/manage'         : 'back/AdminController.order',
    'GET    /admin/customer/list'          : 'back/AdminController.user',

    // page of admin preference
    'GET    /admin/preference'          : { view: 'back/preference' },

    // page to manage the modules
    'GET    /admin/module'          : { view: 'back/module/index' },

    // install page 
    'GET    /admin/install'          : { view: 'back/install/index' }

};

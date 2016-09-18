
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
    // old with menu toogle 'GET    /admin'               : 'admin/AdminController.index',

    'GET    /admin'               : 'admin/AdminController.menu',


    'GET    /admin/product/new': 'admin/productController.new',

    'GET    /admin/menu': 'admin/AdminController.menu',

    // create the new product in db 
    '/admin/product/new/validation': 'admin/AdminController.productNewValidation',


    // url to use the profile of the admin user
    'GET    /admin/profile': 'admin/userController.profile',


    //'admin/AdminController.productCreate',

    
    
    // display all the product available 
    'GET    /admin/product/manager'       : 'admin/productController.manage',
    

    // display the detail about one product
    'GET    /admin/product/preview/:id'   : 'admin/productController.detail',


    // edit the product
    'GET    /admin/product/edit/:id'   : 'admin/productController.edit',


    'GET    /admin/order'         : 'admin/AdminController.order',
    'GET    /admin/customer/list'          : 'admin/AdminController.user',

    // page of admin preference
    'GET    /admin/preference'          : { view: 'admin/preference' },
    
    
    // page to manage the modules
    'GET    /admin/module'          : { view: 'admin/module/index' },
    
    
    
    // install page 
    'GET    /admin/install'          : { view: 'admin/install/index' }







};

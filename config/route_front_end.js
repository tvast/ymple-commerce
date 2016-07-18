module.exports.routes = {


// USER

    'POST   /login': 'UserController.login',
    'POST   /signup': 'UserController.create',
    'POST   /reset': 'UserController.reset',
    'GET    /logout': 'UserController.logout',
    'GET    /profile': 'UserController.profile',

    // PRODUCT
    'GET    /product/:id': 'ProductController.view',
    'GET    /product/status/:id': 'ProductController.status',

    // ORDER & CART
    'GET    /cart': 'CartController.index',
    'PUT    /cart/apply/:id': 'CartController.apply',
    'GET    /cart/add/:id': 'CartController.add',
    'GET    /cart/buy/:id': 'CartController.add',
    'GET    /cart/clear': 'CartController.clear',
    'DELETE /cart/:id': 'CartController.delete',
    'GET    /checkout': 'CartController.checkout',

    'POST   /paid': 'OrderController.paid',
    'GET    /pay/:id': 'OrderController.pay',
    // 'GET    /order'               : 'OrderController.index',
    'GET    /order/cancel/:id': 'OrderController.cancel',
    'GET    /order/delivery/:id': 'OrderController.delivery',
    'GET    /order/check': 'OrderController.check',
    'GET    /order/change': 'OrderController.change',

    // FILE & UPLOAD
    'GET    /upload': 'FileController.upload',
    'GET    /image/:id': 'FileController.retrieve',
    'GET    /test': 'FileController.test'

}
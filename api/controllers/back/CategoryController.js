/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    /**
     * `CategoryController.list()`
     */
    list: function (req, res) {

        var result = {
            admin: req.session.user
        };


        result.products = [];
        result.pages = [];
        result.page = '';

        result.templateToInclude = 'categoryList';

        return res.view('back/menu.ejs', result);


    },


    /**
     * `CategoryController.create()`
     */
    create: function (req, res) {

        var result = {};

        result.templateToInclude = 'categoryCreate';

        return res.view('back/menu.ejs', result);


        /* return res.json({
         todo: 'new() is not implemented yet!'
         });*/
    },


    /**
     * `CategoryController.update()`
     */
    update: function (req, res) {
        return res.json({
            todo: 'update() is not implemented yet!'
        });
    },

    createValidation: function (req, res) {

        console.info('req');
        console.info(req.body);

        if (req && req.body && req.body.name) {
            var data = {};
            data = req.body;

            console.log('create data', data);

            Category.create(data, function (err, product) {
                if (err) {
                    return res.serverError(err);
                }
                else {
                    var result = {};
                    result.templateToInclude = 'categoryCreationOk';
                    return res.view('back/menu.ejs', result);
                    //return res.ok('create of the product done', req.body);
                }
                //return res.redirect('/admin/product');
            });

        }
        else {
            var result = {};
            result.templateToInclude = 'categoryCreationKo';
            return res.view('back/menu.ejs', result);
            //return res.ok('missing one parameter');
        }
    }

};


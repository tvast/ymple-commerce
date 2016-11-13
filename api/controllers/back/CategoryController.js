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
    }
};


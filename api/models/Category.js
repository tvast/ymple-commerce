/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    icon: {
      type: 'string',
      required: false
    },
    description: {
      type: 'string',
      required: false

    },

    idCategory: {
      type: 'integer',
      required: false

    },
    createdAt: {
      type: 'datetime',
      required: false

    },
    updatedAt: {
      type: 'datetime',
      required: false

    },







    beforeCreate : function (values, cb) {

      // add seq number, use
      Sequence.next("order", function(err, num) {

        if (err) return cb(err);

        values.idCategory = num;

        cb();
      });
    }
  }
};


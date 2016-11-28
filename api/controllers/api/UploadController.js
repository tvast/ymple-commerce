/**
 * UploadControllerController
 *
 * @description :: Server-side logic for managing Uploadcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

  /**
   * `UploadControllerController.imageProduct()`
   */
  imageProduct: function (req, res) {

    var fs    = require("fs");

    console.info('image upload');

    //console.info(req);

    req.file('file').upload(function (err, uploadedFiles) {
      // ...

      console.info('uploaded file');
      console.info(uploadedFiles);
    });

    return res.json({
      todo: 'imageProduct() is not implemented yet!'
    });
  }
};


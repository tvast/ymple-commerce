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

        var fs = require("fs");

        console.info('image upload');

        req.file('file').upload(function (err, uploadedFiles) {

            console.info('uploaded file');
            console.info(uploadedFiles);

            if (uploadedFiles[0].fd) {
                var filePath = uploadedFiles[0].fd;
                var productId = 1;

                // copy of the file to assets/images/
                fs.createReadStream(filePath).pipe(fs.createWriteStream('assets/images/product/'+productId+ '.png'));
            }
        });

        return res.json({
            todo: 'imageProduct() is not implemented yet!'
        });
    }
};


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
    saveImageProduct: function (req, res, idProduct) {

        console.log('uploadController - imageProduct - idProduct', req.params.idProduct); // we have the product id

        var idProduct = req.params.idProduct;

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

            // add the imagePath for this product

            console.log('UploadController - saveImageProduct - start' );
            InsertDbService.saveImageProduct(idProduct, filePath);

        });

        return res.json({
            todo: 'imageProduct() is not implemented yet!'
        });
    }
};


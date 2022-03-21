const Product = require('../model/productmodel');
const { validationResult } = require('express-validator');
exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount)
                return response.status(202).json({ message: 'success' });
            else
                return response.status(204).json({ message: 'not deleted' });
        })
        .catch(err => {
            return response.status(500).json({ message: 'Something went wrong' });
        });
}
exports.getProduct = (request, response) => {
    Product.find().
        then(results => {
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}
exports.update = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });
    Product.updateOne({ _id: request.body.productId },
        {
            $set: {
                productName: request.body.productName,
                productPrice: request.body.productPrice*1,
                productQty: request.body.productQty*1,
                productDescription: request.body.productDescription,
                productDiscount: request.body.productDiscount*1,
                productrating: request.body.productrating,
                categoryId:request.body.categoryId,
                productImageUrl: "http://localhost:3000/images/" + request.file.filename


            }
        }).then(result => {
            if (result.modifiedCount)
                return response.status(200).json({ message: 'success' });
            else
                return response.status(404).json({ message: 'record not found' })
        }).catch(err => {
            return response.status(500).json({ message: 'Something went wrong..' });
        });
}
exports.add = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    Product.create({


        productName: request.body.productName,
        productPrice: request.body.productPrice*1,
        productQty: request.body.productQty*1,
        productDescription: request.body.productDescription,
        productDiscount: request.body.productDiscount*1,
        productrating:request.body.productrating,
        categoryId:request.body.categoryId,
        productImageUrl: "http://localhost:3000/images/" + request.file.filename



    })
        .then(result => {

            return response.status(201).json(result);
        })
        .catch(err => {
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        })
}  
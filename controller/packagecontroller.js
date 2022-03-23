const package = require('../model/packagemodel');
const { validationResult } = require('express-validator');

exports.getpackage = (request, response) => {
    package.find().
        then(results => {
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}

exports.add = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    package.create({


        packageName: request.body.packageName,
        packagePrice: request.body.packagePrice*1,
        packageQty: request.body.packageQty*1,
        packageDesc: request.body.packageDesc,
        packageDiscount: request.body.packageDiscount*1,
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
const order=require('../model/ordermodel');
const { validationResult } = require('express-validator');
exports.getorder = (request, response) => {
    order.find().
        then(results => {
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}
exports.add = (request, response, next) => {
    //console.log(request.body);
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    order.create({

             orderQty : request.body.orderQty,
             orderAddress : request.body.orderAddress,
             orderNumber: request.body.orderNumber,
             userId : request.body.userId,
             productId:request.body.productId,
             currentDate:request.body.currentDate,
             

    })
        .then(result => {

            return response.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        })
}
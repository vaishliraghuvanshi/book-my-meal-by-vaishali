const query=require('../model/supportmodel');
const { validationResult } = require('express-validator');
exports.getquery = (request, response) => {
    query.find().
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

    query.create({

             query : request.body.query,
             currentDate : request.body.currentDate,
             userid : request.body.userid,
             productid:request.body.productid
             

    })
        .then(result => {

            return response.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        })
}
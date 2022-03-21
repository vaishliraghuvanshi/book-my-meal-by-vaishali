const User = require('../model/usermodel');
const { validationResult } = require('express-validator');
exports.deleteuser = (request, response) => {
    User.deleteOne({ _id: request.body.id })
        .then(result => {
            if (result.deletedCount){
                console.log(result)
                return response.status(202).json(result);
            }
            else
                return response.status(204).json({ message: 'not deleted' });
        })
        .catch(err => {
            return response.status(500).json(error);
        });
}

exports.update = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });
    User.updateOne({ _id: request.body.userId },
        {
            $set: {
                userName: request.body.userName,
                email: request.body.email,
                password: request.body.password,
                mobile: request.body.mobile,
                gender: request.body.gender,
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
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() });

    User.create({
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password,
        mobile: request.body.mobile,
        gender: request.body.gender,
    })
        .then(result => {

            return response.status(201).json(result);
        })
        .catch(err => {
            return response.status(403).json({ message: "Oops! Something went wrong.." });
        })
    }

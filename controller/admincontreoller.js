const { validationResult } = require('express-validator');
const Admin = require('../model/adminmodel');

exports.signup = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() });

    }

    Admin.create({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        return response.status(500).json(err);
    });

}
exports.signin = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() });

    }

    Admin.findOne({
        email: request.body.email,
        password: request.body.password
    })
        .then(result => {
            if (result) {
                console.log(result);
                return response.status(200).json(result);
            }
            else
                return response.status(404).json({ message: 'Invalid User' });
        }).catch(err => {
            return response.status(500).json({ message: 'Oops! something went wrong' });
        })
}
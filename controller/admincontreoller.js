const { response } = require('express');
const { validationResult } = require('express-validator');
const Admin = require('../model/adminmodel');
const User = require('../model/usermodel');

exports.AddToBlock=(request,response)=>{
    User.updateOne({_id:request.params.id},{$set:{
        Isblocked:true
    }}).then(result=>{
        // console.log(result)
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);

    })
}
exports.updateProfile=(request,response)=>{
    Admin.updateOne({_id:request.body.id},
        {$set:{
            email:request.body.email,
            password:request.body.password,
            username:request.body.username
}}).then(result=>{
    return response.status(200).json(result);
}).catch(err=>{
    return response.status(500).json(err);
})
}

exports.getList = (request, response) => {
    User.find().
        then(results => {
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}
exports.RemoveFromBlock=(request,response)=>{
    User.updateOne({_id:request.params.id},{$set:{
        Isblocked:false
    }}).then(result=>{
        // console.log(result)
        return response.status(200).json(result);
    }).catch(err=>{
        return response.status(500).json(err);

    })
}


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

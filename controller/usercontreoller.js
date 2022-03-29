const User = require('../model/usermodel');
const { validationResult } = require('express-validator');
exports.signup = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() });

    }

    User.create({
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password,
        gender:request.body.gender,
        mobile:request.body.mobile,
    
    }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        console.log("error in signup ", err)
        return response.status(500).json(err);
    });
}
exports.updateprofile=(request,response)=>{
    User.updateOne({_id:request.body.id},
        {$set:{
            email:request.body.email,
            password:request.body.password,
            userName:request.body.userName,
            gender:request.body.gender,
            mobile:request.body.mobile,
}}).then(result=>{
    return response.status(200).json(result);
}).catch(err=>{
    return response.status(500).json(err);
})
}
exports.signin = (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() });

    }
    User.findOne({
        email: request.body.email
    })
        .then(result => {
            if (result.password === request.body.password && result.Isblocked) {
                 console.log(result);
                return response.status(200).json({msg: "Logged in"});
            }
            else
                return response.status(404).json({ message: 'Invalid Password' });
        }).catch(err => {
            return response.status(500).json({ message: 'Invalid email '});
        })
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true,
        unique: true
    },
    mobile: {
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },

})
module.exports =mongoose.model("users",userSchema);

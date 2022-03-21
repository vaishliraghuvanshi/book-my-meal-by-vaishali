const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,

    }
})

module.exports = mongoose.model("admins", adminSchema);
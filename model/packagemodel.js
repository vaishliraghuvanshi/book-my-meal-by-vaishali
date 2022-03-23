const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const packageSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true,
        trim: true

    },
    packageImage: {
        type: String,
        required: true,
        trim: true
    },
    packagePrice: {
        type: Number,
        required: true,
        min: 1
    },
    packageQty: {
        type: Number,
        required: true,
        min: 1
    },
    packageDesc: {
        type: String,
        required: true,
        trim: true
    },
    packageDiscount: {
        type: Number,
        required: true,
        default: 0
    },
    /*packageComment: [
        {
            user: {
                types: Schema.Types.ObjectId,
                ref: "users"
            },
            text: String
        }
    ],
    */
    categoryId: Schema.Types.ObjectId

})

module.exports = mongoose.model("packages", packageSchema);
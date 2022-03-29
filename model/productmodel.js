const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    productPrice: {
        type: Number,
        required: true,
        min: 1,
    },
    productQty: {
        type: Number,
        required: true,
        min: 1

    },
    productDescription: {
        type: String,
        required: true,
        trim: true,
    },
    productImageUrl: {
        type: String,
        required: true,
        trim: true
    },
    productDiscount: {
        type: Number,
        default: 0
    },
    productrating:{
         type:Number,
         min:1,
         max:5,
    },
    stock:{
        type:String,
        default: "Available",
    },
    categoryId: Schema.Types.ObjectId
});
module.exports = mongoose.model("products", productSchema);
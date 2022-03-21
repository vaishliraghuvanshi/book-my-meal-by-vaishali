const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new  mongoose.Schema({
    userId:String,
    productId:String,
    orderAddress:String,
    orderNumber:Number,
    orderQty:Number,
    currentDate:{
        type : Date,
        default : Date.now,
       
   },

})
module.exports = mongoose.model("orders", orderSchema);
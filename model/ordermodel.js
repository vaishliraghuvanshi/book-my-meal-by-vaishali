const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new  mongoose.Schema({
    productId:String,
    orderAddress:String,
    orderNumber:Number,
    orderQty:Number,
    currentDate:{
        type : Date,
        default : Date.now(),
    
   },
   userId: Schema.Types.ObjectId,
})
module.exports = mongoose.model("orders", orderSchema);
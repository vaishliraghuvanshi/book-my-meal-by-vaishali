const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const supportSchema =new mongoose.Schema({
    query:{
        type:String,
        
    },
    currentDate:{
         type : Date,
         default : Date.now,
        
    },
    userid:{

    type:Schema.Types.ObjectId 
    },
    productid:{
        type:Schema.Types.ObjectId
    } 
});
   

module.exports =mongoose.model("supports",supportSchema);
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const wishlistSchema =new mongoose.Schema({
    userId: Schema.Types.ObjectId,
    productList:[
        {
            type:Schema.Types.ObjectId,
            ref:'products'
        }
    ]
});
module.exports = mongoose.model("wishlist", wishlistSchema);
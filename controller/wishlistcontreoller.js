const Wishlist = require('../model/wishlistmodel');
exports.addTowishlist =async (request , response)=>{
let wishlist = await Wishlist.findOne({userId:request.body.userId});
if(!wishlist){
    wishlist = new Wishlist();
    wishlist.userId = request.body.userId;
}
wishlist.productList.push(request.body.productId);
wishlist.save()
.then(result=>{
    return response.status(200).json(result);
})
.catch(err=>{
    return response.status(402).json(err);

})

}
exports.viewwishlist =(request,response)=>{
    let userId = request.params.userId;
    // console.log(userId);
    Wishlist.findOne({userId:userId}).populate("productList")
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    })
}
exports.updatewishlist =(request,response)=>{
    let userId = request.params.userId;
    Wishlist.updateOne({userId:request.body.userId},
        {
           $pullAll:{
               productList:[{_id:request.body.productId}]
           } 
        })

.then(result=>{
     return response.status(200).json(result);
})
.catch(err=>{
    return response.status(500).json(err);
})
}
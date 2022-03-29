const Cart = require('../model/cartmodel');
exports.addToCart = async (request, response) => {
    let cart = await Cart.findOne({ userId: request.body.userId });
    if (!cart) {
        cart = new Cart();
        cart.userId = request.body.userId;
    }
    cart.productList.push(request.body.productId);
    cart.save()
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(402).json(err);

        })
}
exports.viewcart = (request, response) => {
    let userId = request.params.userId;
    // console.log(userId);
    Cart.findOne({ userId: userId }).populate("productList")
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        })
}
exports.updatecart = (request, response) => {
    Cart.updateOne({ userId: request.body.userId },
        {
            $pullAll: {
                productList: [{ _id: request.body.productId }]
            }
        })

        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        })
}
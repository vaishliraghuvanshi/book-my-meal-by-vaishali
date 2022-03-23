const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vaishali:Vaishali%40123@cluster0.iqght.mongodb.net/RESTAPI");
const app = express();
const adminRouter = require("./routes/adminroute");
const categoryRouter = require("./routes/categoryrouter");
const productRouter = require("./routes/productrouter");
const userRouter = require("./routes/userrouter");
const supportRouter = require("./routes/supportrouter");
const cartRouter = require("./routes/cartrouter");
const wishlistRouter = require("./routes/wishlistrouter");
const OrderRouter=require("./routes/orderrouter");
const packageRouter=require("./routes/packagerouter");

app.use(express.static("./public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/admin", adminRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/support", supportRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/order",   OrderRouter);
app.use("./package",packageRouter);
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("server  is runing");
});
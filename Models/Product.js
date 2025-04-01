const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: String,
    name: String,
    description: String,
    link: String,
    img: String,
    category: String,
    discount: String,
    reviews: String,
    price: Number,
    rating: Number,
});
const Product = mongoose.model("Product", productSchema);
module.exports= Product;
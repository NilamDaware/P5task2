const express = require('express')
const mongoose = require("mongoose");
const app = express()
app.use(express.json());
const port = 3000
const Product = require("./Models/Product");
const Signup = require("./Models/Signup");
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/addproduct",async (req, res) => {
    try
    {
        const product = await Product.create(req.body);
        res.json(product);
        console.log("Data inserted");
    }
    catch(error)
    {
        res.send("Data not inserted");
    }
})
app.get("/getproduct",async (req, res) => {
    try
    {
        const product = await Product.find({});
        res.json(product);
        console.log("Data fetched");
    }
    catch(error)
    {
        res.send("Data not fetched");
    }
})
app.post("/addsignup",async (req, res) => {
    try
    {
        const signup= await Product.create(req.body);
        res.json(signup);
        console.log("User created");
    }
    catch(error)
    {
        res.send("User not created");
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://Nilam:hvmgKwswic8TL6jF@p5ecommerce.o2wzvtm.mongodb.net/")
.then(()=> {
    console.log("connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});
const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String,
    password:String,

});
const Signup =mongoose.model("Signup", signupSchema);
    module.exports=Signup;
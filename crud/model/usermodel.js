const mongoose = require("mongoose")
const userschema=new mongoose.Schema({
    email:{
        type:String,
        // required:[true,"name is require"],
        // trim :true,
        // maxLength:[20 ,"name should be less than 20"]
    },
    password:{
        type:String,
        
        // required:[true,"email is require"]
    }
})
module.exports=mongoose.model("user",userschema)
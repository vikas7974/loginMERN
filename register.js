const mongoose=require('mongoose')
const r=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    }

})
const Low=new mongoose.model("register",r)
module.exports=Low;
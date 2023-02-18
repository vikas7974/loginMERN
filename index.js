var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();
const port = 3000;
require("./db");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use(bodyParser.urlencoded({ extended: true }));
const noteSchema = {
  email: String,
  password: String,
};
const Note = mongoose.model("Note", noteSchema);
app.get("/", (req, res)=>{
  res.render("home");
});
app.post("/",async(req,res)=>{
    try{
        const email= req.body.email;
       const password= req.body.password;
       const usermail=await Note.findOne({email:email});
       if(usermail.password===password){
        res.status(201).render("suc");
       }
       else{
        res.render("wrong");
       }
    }catch(error){
        res.status(400).send(error);
    }
})

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.get("/suc", (req, res) => {
  res.render("suc");
});
app.listen(port, () => {
  console.log("http://localhost:" + port + "/");
});





















// app.post("/register",async(req,res)=>{
//     try{
//         console.log(req.body.email);
//         res.send(req.body.email)

//         const register=new Register({
//             email:req.body.email,
//             password:req.body.password
//         })
//        const resp=await register.save();
//        res.status(201).render("admin")
//     }catch(error){
//         res.status(400).send();
//     }
// })
// app.get("/admin",(req,res)=>{
//     res.render("admin")
// })
// app.get("/admin",(req,res)=>{
//     Note.find((err,data)=>{
//         if(err){
//             return res.status(500).send(err)
//         }
//         else{
//             return res.status(200).send(data)
//         }
//     })
// })

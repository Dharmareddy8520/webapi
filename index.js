// baics need to insert in node
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
const mongoose = require('mongoose');


//import from other pages
const rem=require('./views/demo')
const in1=require('./script')
app.use(express.json());

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));//main problem

//connecting to database of mongodb atlas of 2.4 or after   

// mongodb mail :yobaki7658@teknowa.com
//yovefoj644@teknowa.com
mongoose.connect("mongodb+srv://dharmareddy087:bunny087@minii.leeqlnl.mongodb.net/?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//creating schema of database
var userSchema=new mongoose.Schema({
  email:String,
  password:String
});

//creating models
var User=mongoose.model("User",userSchema);
//get request
//login and register pages
app.get("/",function(req,res){
    res.render("login");
  });
  app.get("/register",function(req,res)
  {
    res.render("register");
  });
  app.post("/register",function(req,res){
    var user1=new User({
      email:req.body.email,
      password:req.body.password
    });
    user1.save(function(error){
      if(error){
        console.log(error);
      }else {
        res.render("login");
      }
    });
  });
  
  app.post("/",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    User.findOne({email:username},function(error,found){
      if(error){
        console.log(error);
        console.log("error here");
      }else {
        if(found){
          if(found.password===password){
           res.render('about')
            console.log("hello here")
          }
          else
          {
            res.send("wrong password");
          }
        }
        else
        {
          res.send("email notfound");
        }
      }
    });
  });

  app.get('/index',function(req,res){
    User.find((err,val)=>{
      if(err)
      {
        console.log(err)
      }
      else{
        res.json(val)
      }
    })
  })
  app.use('/king',rem)
  app.use('/home',in1)
  app.get('/about',function(req,res){
    res.render('about')
  })
  app.get('/contact',function(req,res){
    res.render('contact')
  })
const port=process.env.PORT||5000;
app.listen(port,function()
{
  console.log("server started");
});

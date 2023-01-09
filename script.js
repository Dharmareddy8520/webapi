const express=require('express')
const  router=express.Router()
const https=require('https');
const ejs=require("ejs");
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
let w,k,i

router.get('/',function(req,res){
   https.get('https://mainapi-6mx9tw6t4-dharmareddy8520.vercel.app/', function(resp){
      console.log(resp.statusCode)
      let result = '';
      resp.on('data',function(data){
         result += data;
      })
      resp.on('end', () => {
      const obj = JSON.parse(result);
      console.log(obj)
      k=[obj]
      res.render('home', {data:k})
      })
   });
})
module.exports=router



// router.get('/',function(req,res){
//    https.get('https://mainapi-6mx9tw6t4-dharmareddy8520.vercel.app/', function(resp){
//       console.log(resp.statusCode)
//       resp.on('data',function(data){
//       const w=JSON.parse(data)
//       k=[w]
//       console.log(k)
//       res.render('home', {data:k})
//       })
//    });
// })
// module.exports=router


// https.get(url, function(response){
//    let result = '';
//    response.on("data", (data) =>{
//        result += data;
//    });
//    response.on('end', () => {
//        const pokemon = JSON.parse(result);
//        console.log(pokemon);
//    });
// })
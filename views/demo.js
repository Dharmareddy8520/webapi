const express=require('express')
const  router=express.Router()
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dharmareddy087:bunny087@cluster0.22kaoru.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/king',function(req,res){
    client.connect(err => {
        const collection = client.db("plates").collection("numbers");
        // perform actions on the collection object
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result)
          });
      });
})
module.exports=router
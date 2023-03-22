const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce",(err)=>{
   if(err)
   {
    console.log(`unable to connect:${err}`);
   } 
   else{
    console.log("MongoDb is connected");
   }
  });
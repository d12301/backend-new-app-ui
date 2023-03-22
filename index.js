const express=require('express');
require('./db/config');
const cors=require("cors");
const User=require("./db/User")
const app=express();


app.use(express.json());
app.use(cors())
app.post('/register',async(req,res)=>{
let user =new User(req.body);
let result = await user.save();
    res.send(result);

})



app.listen(5000,()=>{
    console.log("app is running on port on 5000")
})
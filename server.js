const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./module/User")
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

//middleware
app.use(express.json());
//-------------------------- step 2 -------------------------?
mongoose.connect("mongodb+srv://parasellikomali:komali123@cluster0.k01v1dc.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("db connected")
})

//-------------------------- step 2 -------------------------?


app.get('/',(req,res)=>{
    res.send("Hello World")
})

//create the data POST
app.post("/students/add",async(req,res)=>{
try{

const user = new User(req.body);

await user.save();

res.send(user);
 
}catch(err){
res.send(err)
}
});

//To read the data 
app.get("/students/:id",async(req,res)=>{
try{

    const user = await User.findById(req.params.id);

    res.send(user);

}catch(err){    
    console.log(err)
}
})


app.listen(4000,()=>{
    console.log("server started")
})
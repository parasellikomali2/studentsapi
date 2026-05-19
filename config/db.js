const mongoose = require('mongoose');

const connectdb = async()=>{
mongoose.connect("mongodb+srv://parasellikomali:komali123@cluster0.k01v1dc.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})
}

module.exports = connectdb;
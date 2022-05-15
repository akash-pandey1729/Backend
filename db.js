const mongoose = require('mongoose');


// const mognoUrl="mongodb://localhost:27017/Healthworld?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mognoUrl = "mongodb+srv://mentalhealthapp:mentalhealthapp@cluster0.jdrxc.mongodb.net/mentalhealthapp?retryWrites=true&w=majority"

const connectToMongo=()=>{
    mongoose.connect(mognoUrl,()=>{
        console.log("Mongoose connect successfully");
    })
}


module.exports=connectToMongo;
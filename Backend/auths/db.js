const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect("mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0");
const db=mongoose.connection;
db.on("connected",()=>{
    console.log("database server connected");
})
module.exports=db;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongoURL);
const db=mongoose.connection;
db.on("connected",()=>{
    console.log("database server connected");
})
module.exports=db;
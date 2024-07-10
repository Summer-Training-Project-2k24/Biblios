//Function to connect to database
//you have to add this code in db.js 

const mongoose=require('mongoose');

function connectwithDB(){
    mongoose.connect('mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log('MongoDB Connected');
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=connectwithDB;

//your server or index.js file should contain these imports and constants for the following code to run
//imports and constants and other necessatities

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectwithDB = require('./connect.js');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const ContactMessage = require('./models/contactus.js')

const bookModel = require('./models/books.js');
const books = require("./sample.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectwithDB();

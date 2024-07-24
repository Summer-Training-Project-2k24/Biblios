//Function to connect to database
//you have to add this code in db.js 

// const mongoose=require('mongoose');

// function connectwithDB(){
//     mongoose.connect('mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
//         console.log('MongoDB Connected');
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// module.exports=connectwithDB;

//your server or index.js file should contain these imports and constants for the following code to run
//imports and constants and other necessatities

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectwithDB = require('../Backend/auths/db.js');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const ContactMessage = require('./models/contactus.js')
const Review=require('./auths/models/review.js')

const bookModel = require('./models/books.js');
const books = require("./sample.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectwithDB();


// Api to handle form submission for contact messages
app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const newMessage = new ContactMessage({ name, email, message });
      await newMessage.save();
      res.status(201).json({ message: 'Message received' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to save message' });
    }
  });

  // Route to get all books
app.get('/allbooks', (req, res) => {
    res.send(books);
  });

  //api to get books by tag name
  app.get('/tag/:tagName', asyncHandler(async (req, res) => {
    const { tagName } = req.params;
  
    if (tagName === 'All') {
      // Fetch all books if the tag is "All"
      const allBooks = await bookModel.find({});
      return res.send(allBooks);
    } else {
      // Fetch books by specific tag
      const books = await bookModel.find({ tags: tagName });
      return res.send(books);
    }
  }));

  //api to post(add) review to the backend
  app.post('/api/reviews', async (req, res) => {
    const { name, email, message, rating } = req.body;
    const newReview = new Review({ name, email, message, rating });
  
    try {
      await newReview.save();
      res.status(201).json(newReview);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  //api to get all the reviews from the backend
  app.get('/api/reviews', async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  //api to get all the tags from the backend
  app.get('/tags', asyncHandler(async (req, res) => {
    const tags = await bookModel.aggregate([
      { $unwind: '$tags' },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({ count: -1 });
  
    const all = {
      name: 'All',
      count: await bookModel.countDocuments()
    };
  
    tags.unshift(all);
    res.send(tags);
  }));
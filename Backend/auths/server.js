require('dotenv').config();
require('./db'); // Ensure this points to your database connection file

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userroutes');
const aiRouter = require('./routes/ai');


app.use(cors()); // Use the cors middleware with your frontend URL
app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/ai', aiRouter);



const asyncHandler = require('express-async-handler');
require('dotenv').config();

const ContactMessage = require('./models/contactus.js')
const Review=require('./models/review.js')

const bookModel = require('./models/books.js');
const books = require("./sample.json");


// connectwithDB();


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




const PORT = process.env.PORT || 3400;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




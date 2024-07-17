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




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




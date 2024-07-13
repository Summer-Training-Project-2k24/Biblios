const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
require('dotenv').config();
require('./db'); // Ensure this points to your database connection file

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Use the cors middleware with your frontend URL

const userRoutes = require('./routes/userroutes');
app.use('/user', userRoutes);


const PORT = process.env.PORT || 3400;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






>>>>>>> signinsignupfrontend

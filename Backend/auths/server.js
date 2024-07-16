require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
require('./db'); // Ensure this points to your database connection file

const cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware with your frontend URL



app.use(bodyParser.json());


const userRoutes = require('./routes/userroutes');
app.use('/user', userRoutes);

const aiRouter = require('./routes/ai');
app.use('/ai', aiRouter);



// app.listen(3400,()=>{
//     console.log('listening on port 3400');
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




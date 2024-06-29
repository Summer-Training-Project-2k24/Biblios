
const express = require('express');
require('dotenv').config();
const db=require('./db.js');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());  //req.body


const userroutes=require('./routes/userroutes.js');


const candidateroutes=require('./routes/candidaterouttes.js');
app.use('/user',userroutes);
app.use('/candidate',candidateroutes);


app.listen(3400,()=>{
    console.log('listening on port 3400');
})
//Function to connect to database

const mongoose=require('mongoose');

function connectwithDB(){
    mongoose.connect('mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log('MongoDB Connected');
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=connectwithDB;


//connection with db
const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(
            'mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0',
           );
            console.log('MongoDB Connected');
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports=connectDB;
//conection to database

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

//*********************************************************/

//books schema
const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String], default: [] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, min: 0, max: 5 },
    imageUrl: { type: String, required: true },
    author: { type: String, required: true },
});

const bookModel=mongoose.model("Book",bookSchema)
module.exports=bookModel

///new authsmkcsmkmkmkcmakmkmkmkkm
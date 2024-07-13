const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://mail4shavi:6k3rFOJBW82jtwIx@cluster0.xzamzuy.mongodb.net/BookStote?retryWrites=true&w=majority&appName=Cluster0/Books')
const bookSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Object, 
        required: true 
    },
    tags: { 
        type: [String], 
        default: []         
    },
    favorite: { 
        type: Boolean, 
        default: false 
    },
    stars: { 
        type: Number, 
        min: 0, 
        max: 5 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
});

const bookModel=mongoose.model("Book",bookSchema)
module.exports=bookModel

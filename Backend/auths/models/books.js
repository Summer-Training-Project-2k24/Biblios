const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
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
    author: { 
        type: String, 
        required: true 
    },
});

const bookModel=mongoose.model("Book",bookSchema)
module.exports=bookModel

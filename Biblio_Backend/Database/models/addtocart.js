const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    bookId: { type: String, required: true },
    bookName: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    imageUrl: { type: String, required: true },
    tags: { type: [String], default: [] }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;

const mongoose = require('mongoose');

// Define the schema for Item
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensure that name is provided
        trim: true // Remove leading and trailing whitespace
    },
    price: {
        type: Number, // Use Number type for prices
        default: 0, // Default value as a number
        min: 0 // Ensure price is non-negative
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create and export the model
const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

module.exports = Item;

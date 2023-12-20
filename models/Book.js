/**
 * Dependencies
 */
const mongoose = require("mongoose");

// Create our Schema. Define the shape of our data to mongoose
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    completed: Boolean
})

// Compose our model from the schema
const Book = mongoose.model("Book", bookSchema)

// Export our model
module.exports = Book

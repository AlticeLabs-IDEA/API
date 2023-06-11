const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    options: {
        type: Map,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    adjustment: {
        type: String,
        required: true,
        default: null,
    },
    category: {
        type: String,
        required: true,
    }
}, { collection: 'question' });

module.exports = mongoose.model("question", questionSchema);

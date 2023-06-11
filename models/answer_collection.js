const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    option: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    user_id: {
        type: String,
        required: true,
    }
}, { collection: 'answer' });

module.exports = mongoose.model("answer", answerSchema);

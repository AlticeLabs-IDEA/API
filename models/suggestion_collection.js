const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, { collection: 'suggestion' });

module.exports = mongoose.model("suggestion", suggestionSchema);

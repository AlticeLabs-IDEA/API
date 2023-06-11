const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now()
    },
    code: {
        type: String,
        required: true,
    },
    active_categories: {
        type: Map,
        required: true,
    },
    initial_questions: {
        type: Map,
        required: true,
    },
    hidden_questions: {
        type: Array,
        required: true,
    },
    memorized_answers: {
        type: Array,
        required: true,
    },
    hidden_suggestions: {
        type: Array,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },
    token: {
        type: String,
        required: true,
        default: "",
    },
    last_connection: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, { collection: 'user' });

module.exports = mongoose.model("user", userSchema);

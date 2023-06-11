const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: "",
    },
    organization: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    ranking: {
        type: Number,
        required: false,
    }
}, { collection: 'department' });

module.exports = mongoose.model("department", departmentSchema);

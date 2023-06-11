const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: "",
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
}, { collection: 'organization' });

module.exports = mongoose.model("organization", organizationSchema);

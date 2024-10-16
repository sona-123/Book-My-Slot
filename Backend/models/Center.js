// models/Center.js
const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    sports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sport' }], // Reference to sports offered in this center
}, { timestamps: true });

module.exports = mongoose.model('Center', centerSchema);

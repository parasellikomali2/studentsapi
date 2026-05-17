const mongoose = require("mongoose");
const { type } = require("node:os");

const userschema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number
    },
    color: {
        type: String
    }
});

module.exports = mongoose.model("User",userschema);


const mongoose = require('mongoose');

const SellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    slotsBooked: {
        type: [mongoose.ObjectId],
    },
})

module.exports = mongoose.model("sellers", SellerSchema);

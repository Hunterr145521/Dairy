const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let Order = new Schema({
    Name: {
        type: String,
        trim: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        trim: String,
        required: true
    },
    Address: {
        type: String,
        required: true,
    },
    AmountPay: {
        type: String,
        required: true
    },
    todoLists: [{
        Description: {
            type: String,
            required: true
        },
        Id: {
            type: String,
            required: true
        },
        Image: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        productId: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        }

    }]
},{ timestamps: true})

module.exports = mongoose.model("orders",Order);

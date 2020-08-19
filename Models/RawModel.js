const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Raw = new Schema({
        Name: {
            type: String,
            trim: true,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
        Id: {
            type: String,
            required: true
        },
        Image: {
            type: String,
            required: true
        }
},{ timestamps: true})


module.exports = mongoose.model("RawModel",Raw);

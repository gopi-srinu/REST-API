const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driver = new Schema({
    taskName: String,
    date: String,
    time: String,
    description: String
}, {timestamps: true})

const driverInfo = mongoose.model('driverInfo', driver);
module.exports = driverInfo;
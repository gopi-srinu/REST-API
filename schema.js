const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
    taskName: String,
    date: String,
    time: String,
    description: String
}, {timestamps: true})

const taskInfo = mongoose.model('taskInfo', task);
module.exports = taskInfo;

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    message: String
})

const model = new mongoose.model('Portfolio_Messages',schema);

module.exports = model;
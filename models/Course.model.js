const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: String,
    description: String
})

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
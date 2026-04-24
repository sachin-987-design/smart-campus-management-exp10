const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({ name: String, code: String, credits: Number, instructor: String }, { timestamps: true });
module.exports = mongoose.model('Course', CourseSchema);

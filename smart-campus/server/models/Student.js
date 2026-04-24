const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  name: String, rollNo: String, email: String, department: String, semester: String, phone: String, address: String
}, { timestamps: true });
module.exports = mongoose.model('Student', StudentSchema);

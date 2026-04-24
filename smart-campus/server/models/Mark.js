const mongoose = require('mongoose');
const MarkSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: String, marks: Number, total: { type: Number, default: 100 }
}, { timestamps: true });
module.exports = mongoose.model('Mark', MarkSchema);

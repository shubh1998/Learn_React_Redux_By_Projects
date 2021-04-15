const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  description: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  note_status: { type: Boolean, default: false },
}, {
  timestamps: true
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
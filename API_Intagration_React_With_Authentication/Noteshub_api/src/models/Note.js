const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  description: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  note_status: { type: Boolean, default: false },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }, //reference the column _id in "USER" model
}, {
  timestamps: true
});

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;
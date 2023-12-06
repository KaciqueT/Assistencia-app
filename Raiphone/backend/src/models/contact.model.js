const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
  topic: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'contacts',
});



const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

// models/User.js
const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema(
  {
    name: {type: String,required: true,minlength: [3, 'Business name must be at least 3 characters long']},
    slug: {type: String,required: true,minlength: [3, 'Slug must be at least 3 characters long']},
    status:{type:Boolean,default:true}
  },
  {
    // Automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true 
  }
);

// Create and export the model
const Business = mongoose.model('Business', businessSchema);
module.exports = Business;

// models/User.js
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
  {
    name: {type: String,required: false,minlength: [3, 'Role name must be at least 3 characters long']},
    status:{type:Boolean,default:true}
  },
  {
    // Automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true 
  }
);

// Create and export the model
const Role = mongoose.model('Role', roleSchema);
module.exports = Role;

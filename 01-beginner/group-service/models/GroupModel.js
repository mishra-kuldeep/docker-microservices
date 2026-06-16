// models/User.js
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
  {
    name: {type: String,required: true,minlength: [3, 'Group name must be at least 3 characters long']},
    user_id:{type:mongoose.Types.ObjectId,ref: 'users',required: true},
    status:{type:Boolean,default:true}
  },
  {
    // Automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true 
  }
);

// Create and export the model
const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
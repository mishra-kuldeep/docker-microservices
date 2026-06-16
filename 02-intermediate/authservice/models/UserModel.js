// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: false,
      minlength: [3, 'Username must be at least 3 characters long']
    },
    /*email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\s*[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}\s*$/, 'Please fill a valid email address']
    },*/
    phone: {
    type: String,
    required: [true, 'Phone is required'],
    minlength: [10, 'Phone must be 10 digits'],
    maxlength: [10, 'Phone must be 10 digits']
    },
    otp:{type:String,default:null},
    otpExpiresAt:{type:Date},
    role: {type: mongoose.Schema.Types.ObjectId,ref: 'roles',required: true},
    isVerified: {type: Boolean,default: false},
    is_profile_completed:{type:Boolean,default:false},
    status:{type:Boolean,default:true}
  },
  {
    // Automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true 
  }
);

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;

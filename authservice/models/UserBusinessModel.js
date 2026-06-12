// models/User.js
const mongoose = require('mongoose');

const userBusinessSchema = new mongoose.Schema(
  {
    user_id:{type: mongoose.Schema.Types.ObjectId,ref: 'users',required: true},
    business_id:{type: mongoose.Schema.Types.ObjectId,ref: 'business',required: true},
    role_id:{type: mongoose.Schema.Types.ObjectId,ref: 'roles',required: true},
    status:{type:Boolean,default:true}
  },
  {
    // Automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true 
  }
);

// Compound unique index
userBusinessSchema.index(
    { user_id: 1, business_id: 1 },
    { unique: true }
);

// Create and export the model
const UserBusiness = mongoose.model('user_business', userBusinessSchema);
module.exports = UserBusiness;

const mongoose = require('mongoose');

const GroupMemberSchema = new mongoose.Schema({
    
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups',
        required: true
    },

    member_name: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        default: null,
        trim: true
    },

    monthly_fee: {
        type: Number,
        required: true,
        default: 0
    },

    joining_date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },

    added_by_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('group_members', GroupMemberSchema);
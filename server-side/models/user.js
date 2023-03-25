const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        emailId: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        phoneOtp: String,

    }, { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
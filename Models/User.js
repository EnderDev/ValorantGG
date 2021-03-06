const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required:true
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
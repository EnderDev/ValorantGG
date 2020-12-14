const mongoose = require('mongoose');

const DisplayModeSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    DisplayMode:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('DisplayMode', DisplayModeSchema);
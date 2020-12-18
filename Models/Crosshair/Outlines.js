const mongoose = require('mongoose');

const OutlinesSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    Outlines:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Outlines', OutlinesSchema);
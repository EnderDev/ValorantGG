const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    Color:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Color', ColorSchema);
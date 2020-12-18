const mongoose = require('mongoose');

const InnerLinesSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    InnerLines:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('InnerLines', InnerLinesSchema);
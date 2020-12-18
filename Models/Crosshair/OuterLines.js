const mongoose = require('mongoose');

const OuterLinesSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    OuterLines:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('OuterLines', OuterLinesSchema);
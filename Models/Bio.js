const mongoose = require('mongoose');

const BioSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    Bio:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Bio', BioSchema);
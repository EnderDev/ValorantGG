const mongoose = require('mongoose');

const MonitorSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    Monitor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Monitor', MonitorSchema);
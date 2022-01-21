const mongoose = require('mongoose');

const ChannelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { collection: 'channel' });

module.exports = mongoose.model('channel', ChannelSchema)
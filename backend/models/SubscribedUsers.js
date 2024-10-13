const mongoose = require('mongoose');

const subscribedUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SubscribedUsers = mongoose.model('subscribedusers', subscribedUserSchema);

module.exports = SubscribedUsers;
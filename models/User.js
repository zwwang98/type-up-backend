const mongoose = require('mongoose');

const user = new mongoose.Schema({
    googleId: {
        required: false,
        type: String
    },
    twitterId: {
        required: false,
        type: String
    },
    githubId: {
        required: false,
        type: String
    },
    username: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("user", user);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    first_name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: "No bio supplied yet!"
    }
},
    {
        timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema)
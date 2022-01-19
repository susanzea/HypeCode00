const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    code: {
        type: String,
        required: true
    },

    name: {
        type: String,
        default: 'myFile'
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = File = mongoose.model('File', FileSchema)
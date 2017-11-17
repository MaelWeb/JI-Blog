import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const tagSchema = new Schema({
    name: {
        type: String,
        default: ''
    }
}, {
    toJSON: {
        getters: true,
        virtuals: true
    },
    toObject: {
        getters: true,
        virtuals: true
    }
});

module.exports = mongoose.model('tag', tagSchema);
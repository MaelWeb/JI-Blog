import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const TagSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    count: {
        type:Number,
        default: 0,
        min: 0
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

module.exports = mongoose.model('Tag', TagSchema);
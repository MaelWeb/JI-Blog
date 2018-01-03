import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    img: String,
    desc: String,
    href: String,
    author: String,
    category: {
        type: String,
        default: 'DEFAULT'
    },
    createTime: {
        type: Date
    },
    isReading: {
        type: Boolean,
        default: false
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

module.exports = mongoose.model('Book', BookSchema);
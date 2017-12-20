import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const BannerSchema = new Schema({
    url: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    href: String,
    createTime: {
        type: Date
    },
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

module.exports = mongoose.model('Banner', BannerSchema);
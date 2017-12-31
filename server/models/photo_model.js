import mongoose from 'mongoose';
import moment from 'moment';

moment.locale('zh-cn');

const Schema = mongoose.Schema;
const PhotoSchema = new Schema({
    name: String,
    key: String,
    desc: String,
    width: Number,
    height: Number,
    isBanner: {
        type: Boolean,
        default: false
    },
    like: {
        type: Number,
        default: 0,
        min: 0
    },
    createTime: {
        type: Date,
        default: Date.now
    }
});

PhotoSchema.path('createTime').get(function(v) {
    return moment(v).format('lll');
});

PhotoSchema.set('toJSON', { getters: true, virtuals: true });
PhotoSchema.set('toObject', { getters: true, virtuals: true });

module.exports = mongoose.model('Photo', PhotoSchema);
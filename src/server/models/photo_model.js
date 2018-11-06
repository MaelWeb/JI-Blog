import mongoose from 'mongoose';
import Moment from 'dayjs';

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

PhotoSchema.path('createTime').get(v => Moment(v).format('lll'));

PhotoSchema.set('toJSON', { getters: true, virtuals: true });
PhotoSchema.set('toObject', { getters: true, virtuals: true });

module.exports = mongoose.model('Photo', PhotoSchema);

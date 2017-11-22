import mongoose from 'mongoose';
import moment from 'moment';

moment.locale('zh-cn');

const Schema = mongoose.Schema;
const PhotoSchema = new Schema({
    name: String,
    key: String,
    desc: String,
    like: {
        type: Number,
        default: 0
    },
    createTime: {
        type: Date,
        default: Date.now
    }
});

PhotoSchema.path('createTime').get(function(v) {
    return moment(v).format('lll');
});

module.exports = mongoose.model('Photo', PhotoSchema);
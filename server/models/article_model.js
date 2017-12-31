import mongoose from 'mongoose';
import moment from 'moment';

moment.locale('zh-cn');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    content: String,
    htmlContent: String,
    abstract: String,
    banner: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        default: 'DEFAULT'
    },
    publish: {
        type: Boolean,
        default: false
    },
    visited: {
        type: Number,
        default: 0,
        min: 0
    },
    createTime: {
        type: Date
    },
    lastEditTime: {
        type: Date,
        default: Date.now
    },
});

ArticleSchema.set('toJSON', { getters: true, virtuals: true });
ArticleSchema.set('toObject', { getters: true, virtuals: true });

ArticleSchema.path('createTime').get(function(v) {
    // return moment(v).format('lll');
    return moment(v)
});
ArticleSchema.path('lastEditTime').get(function(v) {
    return moment(v)
});

module.exports = mongoose.model('Article', ArticleSchema);
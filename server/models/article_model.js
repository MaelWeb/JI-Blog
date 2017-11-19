import mongoose from 'mongoose'
import moment from 'moment'
moment.locale('zh-cn');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: String,
    content: String,
    htmlContent: String,
    abstract: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    publish: {
        type: Boolean,
        default: false
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
    return moment(v).format('lll');
});
ArticleSchema.path('lastEditTime').get(function(v) {
    return moment(v).format('lll');
});

module.exports = mongoose.model('Article', ArticleSchema);
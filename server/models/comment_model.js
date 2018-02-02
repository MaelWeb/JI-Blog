import mongoose from 'mongoose';
import moment from 'moment';

moment.locale('zh-cn');

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    user: {
        name: String,
        avatar: String,
        site: String,
        email: {
            type: String,
            validate: {
                validator: function(v) {
                    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g.test(v);
                },
                message: '{VALUE} is not a valid Email!'
            },
            required: [true, 'User Email required']
        }
    },
    reply: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    commentCont: String,
    articleid: String,
    isRemove: {
        type: Boolean,
        default: false
    },
    createTime: {
        type: Date
    },
});

CommentSchema.set('toJSON', { getters: true, virtuals: true });
CommentSchema.set('toObject', { getters: true, virtuals: true });

CommentSchema.path('createTime').get(function(v) {
    return moment(v)
});

module.exports = mongoose.model('Comment', CommentSchema);
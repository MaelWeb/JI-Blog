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
            validate: {
                validator: function(v) {
                    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v);
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
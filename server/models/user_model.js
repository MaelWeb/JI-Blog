import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    avatar: String,
    email: String,
    createTime: String,
    isSuper: {
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

module.exports = mongoose.model('User', UserSchema);
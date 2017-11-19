import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    avatar: String,
    email: String,
    createTime: String
});

module.exports = mongoose.model('User', UserSchema);
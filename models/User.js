const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type:String, unique: true},
  tokens :{type:Number,default:0}
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
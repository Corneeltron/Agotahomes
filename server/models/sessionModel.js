const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, requried: true, unique: true},
  password: {type: String, required: true},
  favorites: {type: Array, required: true}
})

module.exports = mongoose.model('User', userSchema);
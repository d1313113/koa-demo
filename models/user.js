const mongoose = require('../libs/db');

// 制定规则
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});

// 使用规则
const User = mongoose.model('User', UserSchema);

module.exports = { User };

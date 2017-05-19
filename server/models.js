const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String, required: true},
  displayName: {type: String, required: true}
});

const quizItemSchema = mongoose.Schema({
  index: {type: Number, required: true},
  character: {type: String, required: true},
  meaning: {type: String, required: true},
  hint: {type: String},
  pinyin: {type: String, required: true},
});

const User = mongoose.model('users', userSchema);
const QuizItem = mongoose.model('quizitems', quizItemSchema);

module.exports = {User, QuizItem};
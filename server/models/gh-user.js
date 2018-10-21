const mongoose = require('mongoose');
const { Schema } = mongoose;

const gitHubUserSchema = new Schema({
  userName: String,
  avatar_url: String,
  score: Number,
});

module.exports = mongoose.model('GitHubUser', gitHubUserSchema);

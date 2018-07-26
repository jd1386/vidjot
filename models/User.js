const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ideas: [{
    type: Schema.Types.ObjectId,
    ref: 'Idea'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('users', UserSchema);
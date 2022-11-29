const mongoose = require('mongoose');
const User = require('../models/User.model');

const Schema = mongoose.Schema;

const fighterSchema = new Schema(
    {
      name: String,
      description: String,
      imageUrl: String,
      owner: { type: Schema.Types.ObjectId, ref: "User" }
    },
    {
      timestamps: true
    }
  );

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;
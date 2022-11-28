const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fighterSchema = new Schema(
    {
      name: String,
      description: String,
      imageUrl: String
    },
    {
      timestamps: true
    }
  );

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;
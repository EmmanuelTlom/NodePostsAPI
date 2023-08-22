const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  message: {
    type: String,
  },

  state: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },

  // add in geolocation
});

const postsModel = mongoose.model("post", ModelSchema);

module.exports = postsModel;

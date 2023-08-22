const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://emmanuelTlom:IxQLdIuYzx3g2Wu3@cluster0.6n5sffu.mongodb.net/?retryWrites=true&w=majority";
//   "mongodb+srv://emmanueltlom:BTMLOMLB2023@cluster0.nxgu7iy.mongodb.net/?retryWrites=true&w=majority";mongodb+srv://emmanueltlom:<password>@apiproject.9t0hfol.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://emmanueltlom:<password>@apiproject.9t0hfol.mongodb.net/?retryWrites=true&w=majority

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;

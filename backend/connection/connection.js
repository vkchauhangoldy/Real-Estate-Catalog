const mongoose = require("mongoose");

const getConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://kmshyam:shyamsrinivasan@cluster0.d65jc3w.mongodb.net/real-estate?retryWrites=true&w=majority"
  );
  console.log("Connected to database...");
};

module.exports = getConnection;

const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://thienan:thienan@cluster0.bshyl.mongodb.net/nodejs_learn?retryWrites=true&w=majority");
    console.log("connect success!!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };

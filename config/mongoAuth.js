const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mongoDB: () => {
    mongoose
      .connect(process.env.Mongo_url, {})
      .then(() => {
        console.log("(Atles) Mongodb Database connected");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

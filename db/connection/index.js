const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.connectionString
  )
  .then(() => {
    console.log("DataBase Connection Successful..");
  })
  .catch((err) => {
    console.log(err);
  });

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

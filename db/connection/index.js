const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Bharath:L5vtJS4SkRT24ezS@cluster0.9n7bfvo.mongodb.net/Portfolio_Messages"
  )
  .then(() => {
    console.log("DataBase Connection Successful..");
  })
  .catch((err) => {
    console.log(err);
  });

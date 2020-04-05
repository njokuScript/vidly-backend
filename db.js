const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err, "erroe connecting to database"));

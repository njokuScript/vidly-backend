const mongoose = require("mongoose");

const express = require("express");
const app = express();
const genres = require("./routes/genres");
const customers = require("./routes/customers");
app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err, "error connecting to database"));

//data of movie genres

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));

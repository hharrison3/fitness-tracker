const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://harbourharrison:FKUBcMBZ6lO0SATM@cluster0.bnl5i.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
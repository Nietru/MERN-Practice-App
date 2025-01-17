require("dotenv").config();
// add express package
const express = require("express");
// add express app - require express
const app = express();

// listen request
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app!" });
});

// listen for requests/connections
app.listen(process.env.PORT, () => {
  console.log("Listening on port!");
});

// add express package
const express = require("express");
// add express app - require express, make it a function
const app = express();
// listen for requests/connections
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

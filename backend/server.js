// add express package
const express = require("express")
// add express app - require express
const app = express()
//
// make a route for get-requests
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app!'})
})
//
// listen for requests/connections
app.listen(4000, () => {
  console.log("Listening on port 4000!");
});

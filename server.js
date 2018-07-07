const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const axios = require('axios')

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/slackoverflowdb");
mongoose.connect(process.env.MONGODB_URI || "mongodb://thomas:tseaman14@ds217671.mlab.com:17671/heroku_0m7qcq66");


// API calls
// Slack bot Route to listen for links to post to DB
require("./routes/rtmslack.js")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
})

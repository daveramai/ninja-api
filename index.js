let express = require("express");
let bodyParser = require("body-parser");

//setup express app
let app = express();

//middleware added - order is important!
app.use(bodyParser.json());

//initialize routes
//to use the routes in the api.js file and automatically append '/api/...'
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});

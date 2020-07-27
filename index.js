let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

//setup express app
let app = express();

//connect to mongodb
let uri =
  "mongodb+srv://ninja:Secure$123@ninjaapi.inujq.azure.mongodb.net/ninjago?retryWrites=true&w=majority";
try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to my mongodb")
  );
} catch (error) {
  console.log("could not connect to mongodb");
}

//override the mongoose Promise with node's Promise - as its deprecated
mongoose.Promise = global.Promise;

//middleware added - order is important!
app.use(bodyParser.json());

//initialize routes
//to use the routes in the api.js file and automatically append '/api/...'
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});

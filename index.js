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
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log("Connected to my mongodb")
  );
} catch (error) {
  console.log("could not connect to mongodb");
}

//override the mongoose Promise with node's Promise - as its deprecated
mongoose.Promise = global.Promise;

//middleware to serve static files
app.use(express.static("public"));

// 1st middleware
//bodyparser package to parse http request body - order is important!
app.use(bodyParser.json());

// 2nd middleware
//iniatilize and use the routes in the api.js file and automatically append '/api/...'
app.use("/api", require("./routes/api"));

// 3rd middleware
//error handliing with a custom function that we create
app.use(function (err, req, res, next) {
  res.status(422).send({ "Custom error": err.message });
});

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});

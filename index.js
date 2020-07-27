let express = require("express");

//setup express app
let app = express();

//initialize routes
//to use the routes in the api.js file and automatically append '/api/...'
//nb: .use is a middleware
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});

app.get("/api", function (req, res) {
  res.send({ name: "Dave" });
});

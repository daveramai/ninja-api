let express = require("express");

//setup express app
let app = express();

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});

app.get("/api", function (req, res) {
  res.send({ name: "Dave" });
});

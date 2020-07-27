/**
 Use this file to setup our routes for the Ninja API
 */

//require packages here
let express = require("express");
let Ninja = require("../models/ninja");

//need express router
let router = express.Router();

//get a list of ninjas form the database
//nb: don't need to add /api in front
router.get("/ninjas", function (req, res) {
  res.send({ type: "Get" });
});

//add a new ninja to the database
router.post("/ninjas", function (req, res) {
  //create new ninja object using the data sent from the request
  // let ninja = new Ninja(req.body);
  // ninja.save();
  //simplier way than above two lines
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja);
  });
});

//update a ninja in the db
//nb- ":id" is a variable
router.put("/ninjas/:id", function (req, res) {
  res.send({ type: "Put" });
});

//delete a ninja from the db
router.delete("/ninjas/:id", function (req, res) {
  res.send({ type: "Delete" });
});

//export this router created
module.exports = router;

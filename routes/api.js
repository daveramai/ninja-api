/**
 Use this file to setup our routes for the Ninja API
 */

//require express package
let express = require("express");

//need express router
let router = express.Router();

//get a list of ninjas form the database
//nb: don't need to add /api in front
router.get("/ninjas", function (req, res) {
  res.send({ type: "Get" });
});

//add a new ninja to the database
router.post("/ninjas", function (req, res) {
  res.send({ type: "Post" });
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

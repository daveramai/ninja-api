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
router.get("/ninjas", function (req, res, next) {
  /*Ninja.find({}).then(function (ninjas) {
    res.send(ninjas);
  });*/
  Ninja.aggregate()
    .near({
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      },
      maxDistance: 100000,
      spherical: true,
      distanceField: "dist.calculated",
    })
    .then(function (ninjas) {
      res.send(ninjas);
    });
});

//add a new ninja to the database
router.post("/ninjas", function (req, res, next) {
  //create new ninja object using the data sent from the request
  // let ninja = new Ninja(req.body);
  // ninja.save();
  //simplier way than above two lines
  Ninja.create(req.body)
    .then(function (ninja) {
      res.send(ninja);
    })
    //move on to the next middleware for error handling
    .catch(next);
});

//update a ninja in the db
//nb- ":id" is a variable
router.put("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    //find the updated Ninja record on the db and return to the response
    Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
      res.send(ninja);
    });
  });
});

//delete a ninja from the db
router.delete("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndDelete({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja);
  });
});

//export this router created
module.exports = router;

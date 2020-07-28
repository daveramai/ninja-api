let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//create geo location schema
let GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

//create ninja Schema and model
let NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  //add geo location here
  geometry: GeoSchema,
});

//create Ninja model now using our schema above - a model of ninjas will be created!
let Ninja = mongoose.model("ninja", NinjaSchema);

//export the Ninja model
module.exports = Ninja;

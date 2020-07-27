let mongoose = require("mongoose");
let Schema = mongoose.Schema;

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
});

//create Ninja model now using our schema above - a model of ninjas!
let Ninja = mongoose.model("ninja", NinjaSchema);

//export the Ninja model
module.exports = Ninja;

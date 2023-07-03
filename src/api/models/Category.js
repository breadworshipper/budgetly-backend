const mongoose = require("mongoose");
const userObject = require("./User");

var categorySchema = new mongoose.Schema(
    {   
        owner : userObject,
        name : String
    }
);

module.exports = mongoose.model("Category", categorySchema);

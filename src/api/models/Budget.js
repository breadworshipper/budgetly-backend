const mongoose = require("mongoose");
const userObject = require("./User");

var budgetSchema = new mongoose.Schema(
    {   
        owner : userObject,
        name : String, 
        spending : Number,
        target : Number   
    }
);

module.exports = mongoose.model("Budget", budgetSchema);

const mongoose = require("mongoose");

/*
How to query : 
https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose
*/

var budgetSchema = new mongoose.Schema(
    {   
        owner : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        name : String, 
        currentSpending : Number,
        target : Number   
    }
);

module.exports = mongoose.model("Budget", budgetSchema);

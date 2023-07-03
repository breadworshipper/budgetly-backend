const mongoose = require("mongoose");

var categorySchema = new mongoose.Schema(
    {   
        owner : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        name : String
    }
);

module.exports = mongoose.model("Category", categorySchema);

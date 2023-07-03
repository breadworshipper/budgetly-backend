const mongoose = require("mongoose");

var expenseSchema = new mongoose.Schema(
    {
        date: {type: Date, default: Date.now},
        category: {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
        amount: Number,
        note: String
    }
);

module.exports = mongoose.model("Expense", expenseSchema);

const mongoose = require("mongoose");

var expenseSchema = new mongoose.Schema(
    {
        date: Date,
        amount: Number,
        note: String
    }
);

module.exports = mongoose.model("Expense", expenseSchema);

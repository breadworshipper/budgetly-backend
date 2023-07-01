require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/budgetlyDB")

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const authenticationRoute = require("./api/routes/authenticationroute");
app.use("/api/v1/auth", authenticationRoute);

const expenseRoute = require("./api/routes/expenseroute");
app.use("/api/v1/expense", expenseRoute);

const server = app.listen(3000, function(){
    console.log(server.address.port());
});

require('dotenv').config({path:"../.env"});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const localDB = require("./configs/developmentdb");
const prodDB = require("./configs/productiondb");

var dbURL = localDB.mongoUrl;

if (process.env.NODE_ENV === "production"){
    // TODO : Setup production database
    dbURL = prodDB.mongoUrl;
}

mongoose.connect(dbURL);

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const authenticationRoute = require("./api/routes/authenticationroute");
app.use("/api/v1/auth", authenticationRoute);

const expenseRoute = require("./api/routes/expenseroute");
app.use("/api/v1/expense", expenseRoute);

const server = app.listen(3000, function(){
    console.log("Server started at port : ")
    console.log(server.address.port);
});

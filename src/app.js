require('dotenv').config({path:"../.env"});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const localDB = require("./configs/developmentdb");
const prodDB = require("./configs/productiondb");
const session = require("express-session");
const passport = require("passport");

const User = require("./api/models/User");

var dbURL = localDB.mongoUrl;

if (process.env.NODE_ENV === "production"){
    // TODO : Setup production database
    dbURL = prodDB.mongoUrl;
}

mongoose.connect(dbURL);

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false, 
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const authenticationRoute = require("./api/routes/authentication_route");
app.use("/api/v1/auth", authenticationRoute);

const expenseRoute = require("./api/routes/expense_route");
app.use("/api/v1/expense", expenseRoute);

const budgetRoute = require("./api/routes/budget_route");
app.use("/api/v1/budget", budgetRoute);

const categoryRoute = require("./api/routes/category_route");
app.use("/api/v1/route", categoryRoute);

const server = app.listen(3000, function(){
    console.log("Server started at port : ")
    console.log(server.address.port);
});

module.exports = app;

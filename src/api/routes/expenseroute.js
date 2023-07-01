const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

// TODO
router.post("/", jsonParser, function(req, res){

});

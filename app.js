"use strict"

var express = require("express");
var bodyParser = require("body-Parser");
var empresaRoutes = require("./routes/routes");

var app= express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/v1" ,empresaRoutes);

module.exports = app;

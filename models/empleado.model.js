"use strict"
var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var empleadoSchema = Schema({
    name:String,
    post:String,
    department:String
})

module.exports = mongoose.model("empleado",empleadoSchema)
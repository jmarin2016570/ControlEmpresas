'use strict'

var mongoose = require('mongoose');
var app = require("./app");
var port = 3200;
var admin = require("./controller/empresa.controller")

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/ControlEmpresas',{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conectado a la Base de Datos');
        admin.admin();
        app.listen(port,()=>{
            console.log("Servidor esta de express funcionando")
        })

    })
    .catch((err)=>{
        console.log('Error al conectarse a la Base de Datos', err)
    })
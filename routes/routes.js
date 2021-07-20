"use strict"

var express = require("express");
var empleadoController = require("../controller/empleado.controller");
var empresaController = require("../controller/empresa.controller");
var api = express.Router();
var mdAuth =  require("../middlewares/aunteticated");


//Empresas
api.get("/prueba", empresaController.prueba);
api.post("/admin",empresaController.admin);
api.post("/login",empresaController.login);
api.post("/createEmpresa",[mdAuth.ensureAuth,mdAuth.ensureAuthAdmin],empresaController.createEmpresa);
api.put("/updateEmpresa/:id",[mdAuth.ensureAuth,mdAuth.ensureAuthAdmin],empresaController.updateEmpresa);
api.delete("/removeEmpresa/:id",[mdAuth.ensureAuth,mdAuth.ensureAuthAdmin],empresaController.removeEmpresa);
api.get("/getEmpresas",[mdAuth.ensureAuth,mdAuth.ensureAuthAdmin],empresaController.getEmpresas);

//Empleados
api.put("/createEmpleado/:id",mdAuth.ensureAuth,empleadoController.createEmpleado);
api.put("/:id/updateEmpleado/:idE",mdAuth.ensureAuth,empleadoController.updateEmpleado);
api.put("/:id/removeEmpleado/:idE",mdAuth.ensureAuth,empleadoController.removeEmpleado);
api.get("/getEmpleados/:id",mdAuth.ensureAuth,empleadoController.getEmpleados);
api.get('/searchEmpleado', mdAuth.ensureAuth , empleadoController.searchEmpleado);
api.post("/pdfEmpresa/:id",mdAuth.ensureAuth,empleadoController.pdfEmpresa);
module.exports = api;



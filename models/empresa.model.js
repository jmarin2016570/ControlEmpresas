
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var empresaSchema = Schema({
    name:String,
    address:String,
    phone: Number,
    email : String,
    username: String,
    password: String,
    role: String,
    empleados: [{type: Schema.ObjectId, ref:"empleado" }]

}

)   
                                    //nombreExportacion
module.exports =  mongoose.model("empresa",empresaSchema);
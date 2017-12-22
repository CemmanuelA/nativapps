const express = require("express");
var app = express();
app.use(express.static(__dirname + "/app"));
/*const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const Student = require('./models/student');
app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());
*/



/*mongoose.connect('mongodb://localhost/escuela',(err,res) =>{
  if(err){
    return console.log('Error al conectar a la BD ' + err)
  }
  console.log('Conexón establecida')
  
  
  
});*/
// Initialize the app.
var server = app.listen(process.env.PORT, () => {
  var port = server.address().port;
  console.log("App now running on port", port);
  
});






const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/coderest"; // Cambia localhost por 127.0.0.1
mongoose
  .connect(uri)
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log("Error en la conexion", error));

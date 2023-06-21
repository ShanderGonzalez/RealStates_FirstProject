import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

//Crear la app
const app = express()

//Routing
app.use('/', usuarioRoutes)

//Definir puerto y arranque del proycto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`)
});
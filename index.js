import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

//Crear la app
const app = express()

//Habilitar Pug
app.set('view engine', 'pug') //quiero utilizar pug
app.set('views', './views') //y en esta carpeta vas a encontrar los archivos para que los renderices y los trates como un template engine de pug

//Routing
app.use('/auth', usuarioRoutes)

//Definir puerto y arranque del proycto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`)
});
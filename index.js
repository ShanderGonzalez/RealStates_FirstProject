import express from "express";

//Crear la app
const app = express()

//Routing   -> / ruta, function es un callback
app.get('/', function(req, res){
    res.json({msg: 'Hola mundo en express'})
});

app.get('/nosotros', function(req, res){
    res.send("Informacion de nosotros")
});

//Definir puerto y arranque del proycto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`)
});
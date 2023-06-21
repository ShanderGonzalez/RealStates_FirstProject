import express from "express";

const router = express.Router()

//Routing   -> / ruta, function es un callback
router.get('/', (req, res) => {
    res.json({msg: 'Hola mundo en express'})
});

router.post('/', (req, res) => {
    res.send({msg: 'Respuesta de tipo Post'})
});

export default router
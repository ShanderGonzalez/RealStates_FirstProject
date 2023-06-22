import express from "express";

const router = express.Router()

//Routing   -> / ruta, function es un callback
router.get('/login', (req, res) => {
    res.render('auth/login')
});

export default router
const router =require('express').Router();
const { response } = require('express');
const ctrlUsuarios= require('../../controllers/usuarios.controllers')
const midd = require('../../Middlewares/midd.usuario')



router.post('/register', midd.checkDatosAlta, ctrlUsuarios.register)  
router.put('/change',ctrlUsuarios.change)  
router.post('/login',ctrlUsuarios.login)  

module.exports=router;        


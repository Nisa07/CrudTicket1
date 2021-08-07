const router =require('express').Router();
const bcrypt =require('bcryptjs');
const { response } = require('express');
const { Usuarios }= require('../../db')// objeto
const midd = require('../../Middlewares/midd.usuario')
const usuariosService = require("../../Services/usuarios.services");
router.post('/register', midd.checkDatosAlta ,async (req,res)=>{
    try {
        req.body.password =bcrypt.hashSync(req.body.password,10);
        const user = await Usuarios.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al hacer el registro'})
    }
        
    })  
    router.put('/change',async (req,res)=>{
        try {
            req.body.password =bcrypt.hashSync(req.body.password,10);
            await Usuarios.update(req.body, {
                where:{email: req.body.email}
            });
            res.json ({success:'Se ha actualizado la contraseña con exito'})
        } catch (error) {

            res.status(400).render('404', {msj: error.message , titulo: 'Error al hacer el cambio de contraseña'})
        }   
        })  
        router.post('/login',async (req,res)=>{
            try {
                const user =await Usuarios.findOne({ where:{email:req.body.email } })
                if (user) {
                    const iguales= bcrypt.compareSync(req.body.password, user.password);
                    if (iguales) {
                        let validacion = await usuariosService.createToken(req.body);
                        res.json(validacion)  
                    }
                } else {
                    res.json({ error: 'Error en usuario o contraseña'});
                }
            } catch (error) {
    
                res.status(400).render('404', {msj: error.message , titulo: 'Error al ingresar'})
            }   
            })  
        
module.exports=router;
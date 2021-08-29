const { Usuarios }= require('../db')
const bcrypt =require('bcryptjs');
const { response } = require('express');

const usuariosService = require("../Services/usuarios.services");

ctrl={}

ctrl.register= async (req,res)=>{
    try {
        req.body.password =bcrypt.hashSync(req.body.password,10);
        const user = await Usuarios.create(req.body);
        res.json({success:'Se ha dado de alta el usuario con exito'});
    } catch (error) {
        res.status(400).json({ error: 'No se pudo dar de alta'})
    }
        
}

ctrl.change = async (req,res)=>{
    try {
        const user =await Usuarios.findOne({ where:{email:req.body.email } })
        if (user) {
            const iguales= bcrypt.compareSync(req.body.password, user.password);
            if (iguales) {
                await Usuarios.update(req.body, {
                    where:{email: req.body.email}
                })
            }
        } else {
            res.json({ error: 'Las contraseñas no coinciden'});
        }
    
        res.json ({success:'Se ha actualizado la contraseña con exito'})
    } catch (error) {

        res.status(400).json({error:'No se ha podido actualizar la contraseña'})
    }   
}

ctrl.login = async (req,res)=>{
    try {
        const user =await Usuarios.findOne({ where:{email:req.body.email } })
        if (user) {
            const iguales= bcrypt.compareSync(req.body.password, user.password);
            if (iguales) {
                res.json({ success: usuariosService.createToken(user) });  
            }
        } else {
            res.json({ error: 'Error en usuario o contraseña'});
        }
    } catch (error) {

        res.status(400).json({ error: 'No se puedo hacer el login'})
    }   
    }

module.exports= ctrl;
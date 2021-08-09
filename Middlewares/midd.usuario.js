//IMPORTO LOS MODULOS NECESARIOS
//const usuariosService = require('../Services/usuarios.service')

const Joi = require('joi');
const { loginDTO } = require('../dto/users/login.dto');
const { altaUserDTO } = require('../dto/users/alta.dto');
const jwt = require('jwt-simple')

/*module.exports.usuarioValido = async (req,res,next)=>{
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1]
            let verificado = await usuariosService.verificacionUsuario(token)
            req.params.usuario = verificado.data
            return next()
        }else{
            throw new Error ('Este es un sistema seguro y requiere autorización')
        }
    }catch (err){
        console.log(err.message)
        res.status(500).json({error: err.message})
    }
}*/
module.exports.checkDatosLogin = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, loginDTO, "Los datos enviados no son correctos");
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.checkDatosAlta = async(req, res, next) => {
    try {
        await Joi.attempt(req.body, altaUserDTO, "Los datos enviados no son correctos");
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.checkToken= async(req,res,next)=> {
    
        if (!req.headers['user-token']) {
            return res.json({ error: 'Necesitas incluir el token'});
            
        }
    const userToken= req.headers['user-token']
    let payload = {};
    try {
        payload = jwt.decode(userToken,process.env.SECRET_KEY)
        
    } catch (err) {
        return res.json({error: 'El token es incorrecto'});
        
    }
    if(payload.expiredAt<moment().unix()){
        return res.json({error: 'El token ha expirado'});
    }
     req.usuarioId =payload.usuarioId;
     req.usuarioNombre= payload.nombre;
    next();

    
        
    

} 

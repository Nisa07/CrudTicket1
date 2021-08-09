const jwt = require('jwt-simple')
const moment = require('moment')

const cors = require('cors')
require('dotenv').config();


module.exports.createToken = (usuario)=> {
    const payload ={
        usuarioId: usuario.id,
        nombre: usuario.username,
        createdAt:moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
 
    }
    return jwt.encode(payload, process.env.SECRET_KEY);
}
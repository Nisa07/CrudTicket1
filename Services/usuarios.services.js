const jwt = require('jsonwebtoken')

module.exports.createToken = async (data)=> {
    const resultado = jwt.sign({
        data} , process.env.SECRET_KEY 
    ) 
    return resultado
}
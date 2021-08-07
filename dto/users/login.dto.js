const Joi = require('joi');

module.exports.loginDTO = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    password: Joi.string().required()
}).with('username', 'password'); //Si viene con usuario tambien debe existir la contraseña
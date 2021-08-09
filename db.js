const Sequelize = require('sequelize');

const ingresoModel = require('./models/model.ingresos') 
const usuariosModel = require('./models/model.usuarios')
const presupuestosModel =require('./models/model.presupuestos')

const sequelize =new Sequelize('pPwS1XiZt6','pPwS1XiZt6','GPuNnS3GGe',{
    host: "remotemysql.com",
    dialect: "mysql",
});

const Ingreso = ingresoModel(sequelize,Sequelize);
const Usuarios = usuariosModel(sequelize,Sequelize);
const Presupuesto = presupuestosModel(sequelize,Sequelize);

sequelize.sync({ force:false })
    .then(() =>{
        console.log('Tablas sincronizadas')
});


module.exports ={
    Ingreso,
    Usuarios,
    Presupuesto
};
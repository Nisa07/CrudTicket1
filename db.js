const Sequelize = require('sequelize');

const ingresoModel = require('./models/model.ingresos') 

const sequelize =new Sequelize('pPwS1XiZt6','pPwS1XiZt6','GPuNnS3GGe',{
    host: "remotemysql.com",
    dialect: "mysql",
});

const Ingreso = ingresoModel(sequelize,Sequelize);
sequelize.sync({ force:false })
    .then(() =>{
        console.log('Tablas sincronizadas')
});
module.exports ={
    Ingreso
};
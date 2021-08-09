module.exports = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('presupuesto',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,


    }) 
}
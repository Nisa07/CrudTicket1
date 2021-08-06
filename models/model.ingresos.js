module.exports = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('ingreso',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        concepto: type.STRING,
        total:  type.INTEGER


    }) 
}
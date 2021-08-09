const router =require('express').Router()
//const midd= require('../Middlewares/midd.usuario');

const apiIngresosRouter =require('./api/ingresos');
const apiUsersRouter = require('./api/usuarios');
const apiPresupuestosRouter =require('./api/presupuesto');

//router.use('/ingresos', midd.checkToken,apiIngresosRouter);
router.use('/ingresos', apiIngresosRouter);
router.use('/usuarios', apiUsersRouter);
router.use('/presupuesto',apiPresupuestosRouter)

module.exports=router;
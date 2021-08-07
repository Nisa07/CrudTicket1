const router =require('express').Router()

const apiIngresosRouter =require('./api/ingresos');
const apiUsersRouter =require('./api/usuarios');

router.use('/ingresos',apiIngresosRouter);
router.use('/usuarios',apiUsersRouter);

module.exports=router;
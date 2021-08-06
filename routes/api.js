const router =require('express').Router()

const apiIngresosRouter =require('./api/ingresos');

router.use('/ingresos',apiIngresosRouter)
module.exports=router;
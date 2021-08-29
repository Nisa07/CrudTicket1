const router =require('express').Router()
const ctrlPresupuesto= require('../../controllers/presupuestos.controllers')


router.get('/',ctrlPresupuesto.todosPresupuesto)    
router.post('/',ctrlPresupuesto.nuevoPresupuesto)
router.put('/:presupuestoId', ctrlPresupuesto.modificarPresupuesto)
router.delete('/:presupuestoId',ctrlPresupuesto.eliminarPresupuesto)


module.exports=router;
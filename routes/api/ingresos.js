const router =require('express').Router()
const ctrlIngreso= require('../../controllers/ingresos.controllers')


router.get('/',ctrlIngreso.todosIngresos)    
router.post('/', ctrlIngreso.crearIngreso)
router.put('/:ingresoId',ctrl.modificarIngreso)
router.delete('/:ingresoId',ctrl.eliminarIngreso)


module.exports=router;
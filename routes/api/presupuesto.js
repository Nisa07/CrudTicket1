const router =require('express').Router()

const { Presupuesto }= require('../../db')


router.get('/',async (req,res)=>{
    try {
        const presupuesto =await Presupuesto.findAll();
        res.send(presupuesto);
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al traer los presupuestos'})
    }
        
    })    
router.post('/', async (req,res)=>{
try {
    const presupuesto =await Presupuesto.create(req.body);
    res.send(presupuesto);  
} catch (error) {
    res.status(400).render('404', {msj: error.message , titulo: 'Error al agregar el presupuesto'})
}
    
})
router.put('/:presupuestoId', async (req,res)=>{
    try {
        await Presupuesto.update(req.body, {
            where:{ id:req.params.presupuestoId}
            
        });
        res.json ({success:'Se ha actualizado con exito'})
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al modificar el presupuesto'})
    }   
})
router.delete('/:presupuestoId', async (req,res)=>{
    try {
        await Presupuesto.destroy({
            where:{ id:req.params.presupuestoId}
            
        });
        res.json ({success:'Se ha borrado el presupuesto'})
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al borrar el presupuesto'})
    }   
    })


module.exports=router;
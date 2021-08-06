const router =require('express').Router()

const { Ingreso }= require('../../db')

router.get('/',async (req,res)=>{

    const ingreso =await Ingreso.findAll();
    res.send(ingreso);
})
router.post('/', async (req,res)=>{
try {
    const ingreso =await Ingreso.create(req.body);
    res.send(ingreso);  
} catch (error) {
    res.status(400).render('404', {msj: error.message , titulo: 'Error al agregar el producto'})
}
    
})
router.put('/:ingresoId', async (req,res)=>{
    try {
        await Ingreso.update(req.body, {
            where:{ id:req.params.ingresoId}
            
        });
        res.json ({success:'Se ha actualizado con exito'})
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al agregar el producto'})
    }   
})
router.delete('/:ingresoId', async (req,res)=>{
    try {
        await Ingreso.destroy({
            where:{ id:req.params.ingresoId}
            
        });
        res.json ({success:'Se ha borrado la pelicula'})
    } catch (error) {
        res.status(400).render('404', {msj: error.message , titulo: 'Error al agregar el producto'})
    }   
    })


module.exports=router;
const { Presupuesto }= require('../db')
ctrl={}
ctrl.todosPresupuesto = async (req,res)=>{
    try {
        const presupuesto =await Presupuesto.findAll();
        res.send(presupuesto);
    } catch (error) {
        res.status(400).json({ error: 'No se pudo actualizar'})
    }
}
ctrl.nuevoPresupuesto =  async (req,res)=>{
    try {
        const presupuesto =await Presupuesto.create(req.body);
        res.send(presupuesto);  
    } catch (error) {
        res.status(400).json({ error: 'No se pudo actualizar'})
    }
        
}
ctrl.modificarPresupuesto = async (req,res)=>{
    try {
        await Presupuesto.update(req.body, {
            where:{ id:req.params.presupuestoId}
            
        });
        res.json ({success:'Se ha actualizado con exito'})
    } catch (error) {
        res.status(400).json({ error: 'No se pudo actualizar'})
    }   
}


ctrl.eliminarPresupuesto = async (req,res)=>{
    try {
        await Presupuesto.destroy({
            where:{ id:req.params.presupuestoId}
            
        });
        res.json ({success:'Se ha borrado el presupuesto'})
    } catch (error) {
        res.status(400).json({ error: 'No se pudo actualizar'})
    }   
}

module.exports= ctrl;
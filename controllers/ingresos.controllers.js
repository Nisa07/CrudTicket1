const { Ingreso }= require('../db')
ctrl={}

ctrl.todosIngresos = async(req,res) => {
    try {
        const ingreso= await Ingreso.findAll()
        res.send(ingreso)
    } catch (error) {
        res.status(400).json({ error: 'No se pudo regresar'})
    }
}

ctrl.crearIngreso = async (req,res)=>{
    try {
        const ingreso =await Ingreso.create(req.body)
        res.send(ingreso)
    } catch (error) {
        res.status(400).json({ error: 'No se pudo actualizar'})
    }
        
}

ctrl.modificarIngreso= async (req,res)=>{
    try {
        await Ingreso.update(req.body, {
            where:{ id:req.params.ingresoId}
            
        });
        res.json ({success:'Se ha actualizado con exito'})
    } catch (error) {
        res.status(400).json({ error: 'No se pudo actualizar'})
    }   
}

ctrl.eliminarIngreso = async (req,res)=>{
    try {
        await Ingreso.destroy({
            where:{ id:req.params.ingresoId}
            
        });
        res.json ({success:'Se ha borrado el ingreso'})
    } catch (error) {
        res.status(400).json({ error: 'No se pudo borrar'})
    }   
}




module.exports= ctrl;

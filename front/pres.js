
//Variables
const url ='http://localhost:3000/api/presupuesto';

const contenedor =document.querySelector('tbody');
const btnCrear = document.getElementById('btnCrear');
let resultados = ''
const modalPresupuesto = new bootstrap.Modal(document.getElementById('modalIngreso'))// Lo jala por id
const formPresupuesto = document.querySelector('form');
const id=document.getElementById('ID');
let proyecto =document.getElementById('proyecto');

let opcion = ''

btnCrear.addEventListener('click',()=>{

    modalPresupuesto.show() // abre el boton
    opcion ='crear'
})
const mostrar = (presupuestos) =>{
    presupuestos.forEach (presupuesto => {
    resultados+= `
                <tr>
                <td>${presupuesto.id}</td>
                <td>${presupuesto.createdAt}</td>
                <td>${presupuesto.nombre}</td>
                <td>${presupuesto.updatedAt}</td>
                <td class="text-center"> <a class="btnEditar btn btn-primary" href="index.html">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a> </td>
                </tr> 
                `
            })
            contenedor.innerHTML =resultados
        }
//Procedimiento Mostrar
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

//Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("Está seguro de que quiere borrarlo",
    function(){
        fetch(url+'/'+id, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())
        //alertify.success('Ok')
    },
    function(){
        alertify.error('Cancel')
    })
})



//Procedimiento para Crear y Editar
formPresupuesto.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre:proyecto.value,
        
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoPresupuesto = []
            nuevoPresupuesto.push(data)
            mostrar(nuevoPresupuesto)
        })
    }
   
    modalPresupuesto.hide()
})

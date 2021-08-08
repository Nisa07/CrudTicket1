
//Variables
const url ='http://localhost:3000/api/ingresos';

const contenedor =document.querySelector('tbody');
const btnCrear = document.getElementById('btnCrear');
let resultados = ''
const modalIngreso = new bootstrap.Modal(document.getElementById('modalIngreso'))// Lo jala por id
const formIngreso = document.querySelector('form');
const id=document.getElementById('ID');
let concepto =document.getElementById('concepto');
let total =document.getElementById('total');

let opcion = ''

btnCrear.addEventListener('click',()=>{

    modalIngreso.show() // abre el boton
    opcion ='crear'
})
const mostrar = (ingresos) =>{
    ingresos.forEach (ingreso => {
    resultados+= `
                <tr>
                <td>${ingreso.id}</td>
                <td>${ingreso.concepto}</td>
                <td>${ingreso.total}</td>
                <td class="text-center"> <a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a> </td>
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

//Procedimiento Editar
let idForm = 0
on(document, 'click', '.btnEditar', e => {    
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const conceptoForm = fila.children[1].innerHTML
    const totalForm = fila.children[2].innerHTML
    concepto.value =  conceptoForm
    total.value =  totalForm
    opcion = 'editar'
    modalIngreso.show()
     
})

//Procedimiento para Crear y Editar
formIngreso.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                concepto:concepto.value,
                total:total.value
        
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoIngreso = []
            nuevoIngreso.push(data)
            mostrar(nuevoIngreso)
        })
    }
    if(opcion=='editar'){    
        fetch(url+'/'+idForm,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                concepto:concepto.value,
                total:total.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalIngreso.hide()
})

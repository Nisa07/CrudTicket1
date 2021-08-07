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
                <td class="text-center"> <a class="btn Editar btn btn-primary">Editar</a> </td>
                </tr> 
                `
            })
            contenedor.innerHTML =resultados
        }


/*fetch(url)
        .then(response => response.json())
        .then(data=> mostrar(data) )
        .catch(error=>console.log(error))*/
//Mostrar
let res = await fetch("http://localhost:3000/api/productos");
let resultaData = await res.json();

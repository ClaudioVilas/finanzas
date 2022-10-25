class Producto {
    constructor(nombre){
    this.nombre = nombre;
    // this.tipo = tipo;
    // this.valor = valor;
    // this.descricpion = descricpion;
}}

let boton = document.getElementById("botonEnviar");

const listaProductosAgregados = [];

const agregarProducto = () => {
    let nombre = document.getElementById("nombreAccion").value;
    // let tipo = prompt("tipo");
    // let valor = prompt("valor");
    // let descricpion = prompt("descricpion");


let prodcutoNuevo = new Producto (nombre);

listaProductosAgregados.push(prodcutoNuevo);

console.log(agregarProducto);

}

boton.addEventListener("click", agregarProducto);


// function enviarDatos ()  {
//     alert ("Tus datos se enviaron con exito!!");
//     }






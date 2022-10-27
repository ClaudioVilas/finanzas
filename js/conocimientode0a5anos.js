class Producto {
    constructor(nombre){
    this.nombre = nombre;
}}

let boton = document.querySelector("#botonEnviar");

const listaProductosAgregados = [];

const agregarProducto = () => {
    let nombre = document.getElementById("nombreAccion").value;

   let prodcutoNuevo = new Producto (nombre); 

listaProductosAgregados.push(prodcutoNuevo);

}

    console.log(agregarProducto);



boton.addEventListener("click", agregarProducto);


// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;

// function enviarDatos ()  {
//     alert ("Tus datos se enviaron con exito!!");
//     }


// let nombre = document.getElementById("nombreAccion");


// console.log(nombre.value);


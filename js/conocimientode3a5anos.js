const contenedorProductos = document.getElementById("contenedor.productos");
const botonCarrito = document.getElementById("botoncarrito");
const botonesComprar =  document.getElementsByClassName("botonagregar");



const carrito = [];


// Funcion para crear el array en el HTML

listaProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML =`
    <img class = "imagen" src = ${producto.img}>
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <P>${producto.stock} Unidades</p>
    <button id ="idagregar" class="botonagregar" role = "button">Precio: USD ${producto.valor}</button>
    `

    contenedorProductos.appendChild(div);
});


Array.from(botonesComprar).forEach((boton) => {
    boton.addEventListener("click", agregarCarrito)
});


// calse contructora con las que agrega los datos al carrito
class Producto{
    constructor(productoNombre, productoImagen){
        this.productoNombre = productoNombre;
        this.productoImagen = productoImagen;
    }
}


// Funcion con la cual se traen las propiedades de los productos, con la que genera el producto nuevo y con la que los envia al array del carrito

function agregarCarrito (e){
    boton = e.target;
    let divpadre = boton.parentElement;
    let productoNombre = divpadre.querySelector("h3").textContent;
    let productoImagen = divpadre.querySelector(".imagen").src;

const agregarProducto = new Producto (productoNombre, productoImagen);

carrito.push(agregarProducto);

console.log(carrito);

insertarEnCarrito();

 }


//  lugar para agregar los productos en el modal
 const agregarPaginaCarrito = document.querySelector("#modal-body2 .modal-body")


 // Funcion para insertr los productos en la pagina Carrito de compras.
 function insertarEnCarrito () {
     carrito.forEach((producto) => {
     agregarPaginaCarrito.innerHTML =`
     <div clas = "producto">
     <img class = "imagen" src = ${producto.img}>
     <h3>${producto.nombre}</h3>
     <p>${producto.desc}</p>
     </div>
     `
     agregarPaginaCarrito.appendChild(div);
 });
 
 }


// Funcion para que el boton carrito vaya a la pagina del carrito
botonCarrito.addEventListener ("click", () => {
window.location.href = "../pages/carritodecompra.html"});


// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;

const contenedorProductos = document.getElementById("contenedor.productos");
const botonCarrito = document.getElementById("botoncarrito");
const botonesComprar =  document.getElementsByClassName("botonagregar");


const carrito = [];

// Funcion para crear el array en el HTML

listaProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML =`
    <img src = ${producto.img}>
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <P>${producto.stock} Unidades</p>
    <button id ="idagregar" class="botonagregar" role = "button">Precio: USD ${producto.valor}</button>
    <p id = ${producto.id} display = none></p>
    `

    contenedorProductos.appendChild(div);



});


Array.from(botonesComprar).forEach((boton) => {
    boton.addEventListener("click", agregarCarrito)
});


function agregarCarrito (e){
    boton = e.target;
    let divpadre = boton.parentElement;
    let productoNombre = divpadre.querySelector("id");
    console.log(productoNombre);
}



// Funcion para que vaya a la pagina del carrito
botonCarrito.addEventListener ("click", () => {
document.location.href = "../pages/carritodecompra.html"});


// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;


// Agregar a cada boton la funcion para agregar al carrito
 



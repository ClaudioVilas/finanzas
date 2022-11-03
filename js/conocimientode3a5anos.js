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
    <h3 class = "nombre">${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <P>${producto.stock} Unidades</p>
    <button id ="idagregar" class="botonagregar" role = "button">Precio: USD ${producto.valor}</button>
    `

    contenedorProductos.appendChild(div);
});


Array.from(botonesComprar).forEach((boton) => {
    boton.addEventListener("click", agregarCarrito)
});


// Clase contructora con las que Creo las propiedaddes del producto
class Producto{
    constructor(nombre, img){
        this.nombre = nombre;
        this.img = img;
    }
}


// Funcion con la cual se traen las propiedades de los productos, con la que genera el producto nuevo y con la que los envia al array del carrito

function agregarCarrito (e){
    boton = e.target;
    let divpadre = boton.parentElement;
    let nombre = divpadre.getElementsByClassName("nombre").textContent;
    let img = divpadre.querySelector(".imagen").src;

const agregarProducto = new Producto (nombre, img);

carrito.push(agregarProducto);

console.log(carrito);

actualizarCarrito();

 }


//  Lugar para agregar los productos en el modal
 const contenedorCarrito = document.querySelector("#modal-body2")


 // Funcion para insertr los productos en la pagina Carrito de compras.
    function actualizarCarrito () {
        let aux = '';
        carrito.forEach((producto) => {
          aux += `
                    <div class="productomodal">
                        <img src= ${producto.img}>
                            <h3 class="nombre"> ${producto.nombre}</h3>
                            <p class=""> ${producto.tipo}</p>
                            <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                        </div>
                    `;
        });
      
        contenedorCarrito.innerHTML = aux;
        calcularTotalCompra();
      }


//Agrego una función que elimine el producto del carrito:
  
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
  };
  
  ///Función para vaciar todo el carrito por completo:
  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
  });
  
  //Creo una función que me calcule el total del carrito:
  
  const totalCompra = document.getElementById('totalCompra');
  
  const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.valor * producto.cantidad;
    });
    totalCompra.innerHTML = total;
  };


// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;

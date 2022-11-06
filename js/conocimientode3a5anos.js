
const botonCarrito = document.getElementById("botoncarrito");
const botonesComprar =  document.getElementsByClassName("botonagregar");
const contenedorProductos = document.getElementById("contenedor.productos");

const agregarAlCarrito = (id) => {}


const carrito = [];


// Funcion para crear el array en el HTML



listaProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML =`
    <img class = "imagen" src = ${producto.img}>
    <h3 class = "nombre">${producto.nombre}</h3>
    <p class ="tipo">${producto.tipo}</p>
    <p>${producto.desc}</p>
    <P>${producto.stock} Unidades</p>
    <button id ="idagregar" class="botonagregar valor" role = "button">${producto.valor} USD</button>
    `

    contenedorProductos.appendChild(div);



Array.from(botonesComprar).forEach((boton) => {
    boton.addEventListener("click", agregarCarrito)
});

});


// Clase contructora con las que Creo las propiedaddes del producto
class Producto{
    constructor(nombre, tipo, img, valor){
        this.nombre = nombre;
        this.tipo = tipo;
        this.img = img;
        this.valor = valor;
    }
}


// Funcion con la cual se traen las propiedades de los productos, con la que genera el producto nuevo y con la que los envia al array del carrito

function agregarCarrito (e){
    boton = e.target;
    let divpadre = boton.parentElement;
    let nombre = divpadre.querySelector(".nombre").textContent;
    let tipo = divpadre.querySelector(".tipo").textContent;
    let img = divpadre.querySelector(".imagen").src;
    let valor = parseInt(divpadre.querySelector(".valor").innerText);


const agregarProducto = new Producto (nombre, tipo, img, valor);

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
                            <h3> ${producto.nombre}</h3>
                            <h5> ${producto.valor} USD</h5>
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
    let total;
   total = carrito.reduce((acc, el) => acc += el.valor, 0);
      
    totalCompra.innerHTML =  total;
 
  };


// Mail de confirmacion


let mailUsuario = localStorage.getItem("mailUsuario");
myform.innerText = `${mailUsuario}`;


const form = document.getElementById("myform");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("my-form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          Swal.fire('Tu datos han sido enviados correctamente');
          form.reset()
        } 
        else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert ( data["errors"].map(error => error["message"]).join(", "))
            } else {
              Swal.fire("Oops! There was a problem submitting your form")
            }
          })
        }
      }).catch(error => {
        Swal.fire("Oops! There was a problem submitting your form")
      });
    }
    form.addEventListener("submit", handleSubmit);







// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;

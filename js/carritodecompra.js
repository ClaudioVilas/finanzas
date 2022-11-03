/** CARRITO RE LOCOOOOOOOOO AHH**/

//Creo la clase Producto, con las propiedades id, nombre, precio y cantidad:

class Producto {
    constructor(id, nombre, tipo, valor, desc, stock, img) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.valor = valor;
        this.desc = desc;
        this.stock = stock;
        this.img = img;
    }
  }
  
  //Creo productos y los almaceno en un array:



// const producto1 = new Producto (1, "Microsoft", "SoftWare", "1.200", "Empresa Dedicada al desarrollo de Software.", "500",  '../imagenes/vilas/MICROSOFT.jpg');
// const producto2 = new Producto (2, "Apple", "Tecnologica", "500", "Empresa que se dedica al desarrollo de la tecnologia", "500", '../imagenes/vilas/APPLE.jpg');
// const producto3 = new Producto (3, "Mercado Libre", "Ventas On-Line", "250", "Empresa dedicada al comercio y la venta on-line", "1000", '../imagenes/vilas/ML.jpg');
// const producto4 = new Producto (4, "Audi", "Automotriz", "222",  "Empresa dedicada a la produccion y el desarrollo automotor", "1000", '../imagenes/vilas/AUDI.jpg');
// const producto5 = new Producto (5, "Chevrolete",  "Automotriz", "123", "Empresa dedicada a la produccion y el desarrollo automotor", "1000", '../imagenes/vilas/CHEVROLET.jpg');
// const producto6 = new Producto (6, "ElectroLux", "Electrodomesticos", "320", "Empresa dedicada a la fabricacion de electrodomesticos", "900", '../imagenes/vilas/ELECTROLUX.jpg');
// const producto7 = new Producto (7, "Ford", "Automitriz", "455", "Empresa dedicada a la produccion y el desarrollo automotor", "980", '../imagenes/vilas/FORD.jpg');
// const producto8 = new Producto (8, "Google", "Tecnologia", "3.000", "Empresa dedicada al desarrollo e inovacion de las tecnologias", "400", '../imagenes/vilas/GOOGLE.jpg');
// const producto9 = new Producto (9, "Instagram", "Red Social", "650", "Empresa dedicada a las comunicaciones y redes sociales.", "300", '../imagenes/vilas/IG.jpg');
// const producto10 = new Producto (10, "Meta", "Red Social", "560", "Empresa dedicada a las comunicaciones y redes sociales.", "400", '../imagenes/vilas/META.jpg');
// const producto11 = new Producto (11, "Repsol", "Petrolera", "467", "Empresa dedicada a la produccion y comercializacion del petroleo", "455", '../imagenes/vilas/REPSOL.jpg');
// const producto12 = new Producto (12, "Shell", "Petrolera", "654", "Empresa dedicada a la produccion y comercializacion del petroleo", "321", '../imagenes/vilas/SHELL.jpg');
// const producto13 = new Producto (13, "Tesla", "Automitriz", "450", "Empresa dedicada al desarrollo e inovacion de las tecnologias y fabricacion de autos electricos.", "700", '../imagenes/vilas/TESLA.jpg');
// const producto14 = new Producto (14, "Tinder", "Red Social", "465", "Empresa dedicada a las comunicaciones y redes sociales.", "400", '../imagenes/vilas/TINDER.jpg');
// const producto15 = new Producto (15, "Twich", "Red Social", "340", "Empresa dedicada a las comunicaciones y redes sociales.", "400", '../imagenes/vilas/TWITCH.jpg');
// const producto16 = new Producto (16, "Twiter","Red Social", "560", "Empresa dedicada a las comunicaciones y redes sociales.", "400", '../imagenes/vilas/TWITTER.jpg');
// const producto17 = new Producto (17, "YPF", "Petrolera", "200", "Empresa dedicada a la produccion y comercializacion del petroleo", "500", '../imagenes/vilas/YPF.jpg');



  
  
  const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17];
  
  //Muestro los productos modificando el DOM.
  
  const contenedorProductos = document.getElementById('contenedorProductos');
  
  productos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.innerHTML = `
                            <div class = "producto">
                                <img src= ${producto.img}>
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-text"> ${producto.tipo} </p>
                                    <p class="card-text"> ${producto.desc} </p>
                                    <button id="boton${producto.id}" class="btn btn-primary">Valor USD ${producto.valor} </button>
                            </div>`;
    contenedorProductos.appendChild(divProducto);


    //Agregar un evento al boton de agregar al carrito:
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });
  
  //Creo el carrito de compras y una función que busque el producto por id y lo agregue al carrito.
  
  const carrito = [];
  

  //Versión que chequea las cantidades:
  
  const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
  };
  
  //Muestro el carrito de compras modificando el DOM.
  
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const verCarrito = document.getElementById('verCarrito');
  
  verCarrito.addEventListener('click', actualizarCarrito);
  
  function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
      aux += `
                <div class="producto">
                    <img src= ${producto.img}>
                        <h3 class=""> ${producto.nombre} </h3>
                        <p class=""> ${producto.tipo} </p>
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
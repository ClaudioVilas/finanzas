const contenedorProductos = document.getElementById("contenedor.productos");

 
const carrito = [];


listaProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML =`
    <img src = ${producto.img}>
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <P>${producto.stock} Unidades</p>
    <Button id="botonagregar">Precio: USD ${producto.valor}</Button>
    `

    contenedorProductos.appendChild(div);
    
const boton = document.getElementById("botonagregar");

boton.addEventListener ("click", agregarAlCarrito);



})


const agregarAlCarrito = () => {
    carrito.push(pro.nombre);
}

// const agregarAlCarrito = (prodId) => {
//     const item = stockProducto.find ((prod) => producto.nombre === prodId);
//     carrito.push(item)
//     console.log(agregarAlCarrito);
// }

// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;
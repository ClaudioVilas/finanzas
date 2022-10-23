let botonComprar = document.querySelectorAll("a.btn.btn-primary")
let carrito = [];

botonComprar.forEach(boton => {
    boton.addEventListener("click", agregar);  
});

class Producto {
    constructor (productId){
    this.productId = productId;
}
}

function agregar (e){
    boton = e.target; 
    let padre = boton.parentElement;
    let productId = padre.querySelector("h5").textContent;

productoCarrito = new Producto (productId);

carrito.push(productoCarrito)
}
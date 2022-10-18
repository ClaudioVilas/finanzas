class Acciones {
    constructor (nombre, cantidad, sector, valor) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.sector = sector;
        this.valor = valor;
    }
}

const ListaDeCompra = [];

const GuardarCompraDeAcciones = () =>{
let nombre = document.getElementsByClassName("nombreDeLaAccion").value;
let cantidad = document.getElementsByClassName("cantidadAComprar").value;
let sector = document.getElementsByClassName("sector").value;
let valor = document.getElementsByClassName("ValorDeCompra").value;


let NuevaAccion = new Acciones (nombre, cantidad, sector, valor);
ListaDeCompra.push(NuevaAccion);
}

 
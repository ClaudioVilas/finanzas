class Acciones {
    constructor (nombre, cantidad, sector, valor){

        this.nombre = nombre;
        this.cantidad = cantidad;
        this.sector = sector;
        this.valor = valor;
}
}

const listaDeCompra = [];

const GuardarAcciones = () => {
    let nombre = document.getElementsByClassName("stock").value;
    let cantidad = parseFloat(document.getElementsByClassName("cantidad")).value;
    let sector = document.getElementsByClassName("sector").value;
    let valor = parseFloat(document.getElementsByClassName("valor")).value;


let NuevaAccion = new Acciones (nombre, cantidad, sector, valor);
listaDeCompra.push(NuevaAccion);
}

 
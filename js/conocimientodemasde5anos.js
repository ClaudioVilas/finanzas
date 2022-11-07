let datos = document.getElementById("datoDelaApi")


let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockPriceElement = document.getElementById("stock-price")


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    stockPriceElement.innerHTML = parseFloat(stockObject.p).toFixed(2);
};


datos.innerHTML = ` <div> 
<img class = "imagenbtc" src = ../imagenes/vilas/bitcoin.jpg>
ws.onmessage();
</div>`




let botonnew = document.getElementById("botonnew")

class Accion{
    constructor (nombre, cantidad, sector, valor){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.sector = sector;
    this.valor = valor;
    }
};

const seleccionAcciones = [];


function accionNueva  () {
let nombre = document.querySelector("#nombrenew").value;
let cantidad = document.getElementById("cantidadnew").value;
let sector = document.getElementById("sectornew").value;
let valor = document.getElementById("valornew").value;

let accionNueva = new Accion (nombre, cantidad, sector, valor);
seleccionAcciones.push(accionNueva);

}

botonnew.addEventListener("click", accionNueva)


localStorage.setItem ("accionstorage", seleccionAcciones)



// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;

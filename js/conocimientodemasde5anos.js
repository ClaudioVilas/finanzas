// const botonCunsulta = document.getElementById("botonCunsulta");
// const datoDelaApi = document.getElementById("datoDelaApi");


// const obtenerDatos = () => {
//     fetch ("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
//     ) 
//     .then(response => response.json())
//     .then (result =>{console.log(result)

//     } )}

    



// botonCunsulta.onclick = () => {
//     obtenerDatos();
// }


let datos = document.getElementById("datoDelaApi")


let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockPriceElement = document.getElementById("stock-price")


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    stockPriceElement.innerHTML = parseFloat(stockObject.p).toFixed(2);
};


datos.innerHTML = ` <div> 
<img class = "imagen" src = ../imagenes/vilas/bitcoin.jpg>
ws.onmessage();
</div>`



// let ws = new WebSocket("wss://streaming.forexpros.com/echo/483/bsgommhh/websocket");
// let stockPriceElement = document.getElementById("stock-price")


// ws.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     stockPriceElement.innerHTML = parseFloat(stockObject.p).toFixed(2);
// };


const botonCunsulta = document.getElementById("botonCunsulta");
const datoDelaApi = document.getElementById("datoDelaApi");


const obtenerDatos = () => {
    fetch ("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    ) 
    .then(response => response.json())
    .then (result =>{        console.log(result)
        let data = result.Symbol;
        console.log(data)
    } )}

    



botonCunsulta.onclick = () => {
    obtenerDatos();
}


let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockPriceElement = document.getElementById("stock-price")


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    stockPriceElement.innerHTML = parseFloat(stockObject.p).toFixed(2);
};

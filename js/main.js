// completando ejecricio para la entrega

// alert ("Bienvenidos al sitio de Finanzas de Claudio Vilas");


// let pregunta1 = prompt ("Te interesa seguir adelante, si es asi, escribi la palabra, si o claro");

// if ((pregunta1 == "si") || (pregunta1 == "claro")){
//     alert ("Comencemos");

// let nombre = prompt ("Cual es tu nombre");
// alert (`Gracias ${nombre} por confiar en nosotros!`);


// let tipoDeInversion = prompt ("Que tipo de inversion te gustaria hacer, Arriesgada, moderada o conservadora");

// while (tipoDeInversion != "Arriesgada" && tipoDeInversion != "moderada" && tipoDeInversion != "conservadora"){
//     alert("Completaste mal los datos, por favor volve a ingresarlos");
//     tipoDeInversion = prompt ("Que tipo de inversion te gustaria hacer, Arriesgada, moderada o conservadora");
// }

//     alert ("Excelente desicion");

//     let capital = (parseInt(prompt("Que capital deseas invertir, ingresa el monto sin puntos ni comas y en pesos!!")));

//     switch (true) {

//     case (capital == 0): 
//         alert (`Que lastima ${nombre}, no podremos ayudarte!!!`);

//     for (let i = 0; i < 5; i++){
//         prompt ("Deberas ingresar la palabra 'salir' 5 veces por no saber ahorrar")
    
//     }
//     break;

//     case (capital >=1) && (capital <= 10000):
//          alert (`Excelente ${nombre}, te acosejamos lo siguiente!!!`);
                
//         if (tipoDeInversion == "Arriesgada"){
//             alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
//         }

//         else if (tipoDeInversion == "moderada"){
//             alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
//         }
//         else {
//             alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
//         }
//         break;
 
//     case (capital >=10001) && (capital <= 100001):
//         alert (`Super ${nombre}, te acosejamos lo siguiente!!!`);
        
//         if (tipoDeInversion == "Arriesgada"){
//             alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
//         }
//         else if (tipoDeInversion == "moderada"){
//             alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
//         }
//         else {
//             alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
//         }
//         break;
        
//     default: 
//         alert (`Que bueno ${nombre} que puedas invertir a lo grande, te acosejamos lo siguiente!!!`);
//         alert ("Por confirar en nosotros, te regalamos un descuento especial, tu inversion se incrementa un 10%")
        
//         if (tipoDeInversion == "Arriesgada"){
//             alert (`Tu nuevo monto para invertir es ${calcularPromo(capital)} de un modo ${tipoDeInversion}`)
//         }
//         else if (tipoDeInversion == "moderada"){
//             alert (`Tu nuevo monto para invertir es ${calcularPromo(capital)} de un modo ${tipoDeInversion}`)
//         }
//         else {
//             alert (`Tu nuevo monto para invertir es ${calcularPromo(capital)} de un modo ${tipoDeInversion}`)
//         }
//     }
// }

// else{
//     alert(`Completaste con ${pregunta1} no podemos ayudarte. Gracias.`);
// }


// function calcularPromo (num1){
//     let resultado = (((num1 * 100) / 10) + num1);
//     return resultado;
// }


// alert ("Para este ${capital} te ofrecemos que compras 3 tipos de Acciones")
// let nombreAccion = prompt ("Selecciona de la lista o ingresa el nombre que deseas")


// class Accion {
//     constructor(nombre, cantidad, rubro, valor, sePuedeVender, rendimientoUltimoAnio) {
//         this.nombre = nombre
//         this.cantidad = parseInt(cantidad)
//         this.rubro = rubro
//         this.valor = parseInt(valor)
//         this.sePuedeVender = sePuedeVender
//         this.rendimientoUltimoAnio = rendimientoUltimoAnio
//     }
// }

// const comprarAcciones = () =>{
// let nombre = prompt ("Inserta el nombre de una accion que te gustaria tener.");
// let cantidad = prompt ("Inserta la cantidad de acciones que te gustaria tener.");
// let rubro = prompt ("Inserta el nombre del rubro al cual pertenece.");
// let valor = prompt ("Inserta el valor de una accion que te gustaria tener.");
// let sePuedeVender = prompt ("Quieres operar en corto?");
// let rendimientoUltimoAnio = ("Que rendimiento anual estas buscando?");


// const accion = new Accion (nombre, cantidad, rubro, valor, sePuedeVender, rendimientoUltimoAnio);
// console.log (accion);
// return accion;
// }


// let nombreDeAccion = prompt ("Selecciona de la lista o ingresa el nombre que deseas");

// const listaDeAcciones = ["Tesla", "Microsoft", "MercadoLibre", "Meta", "VirginGalacti", "Riot"];

// const listaDeEtf = ["Spx", "DQJ", "QQQ", "Spxl"];

// console.log (listaDeAcciones);
// console.log (listaDeEtf);

// listaDeAcciones.push (nombreDeAccion);

// console.log (listaDeAcciones)


// const listaDeAcciones2 = [
//     {nombre: "Tesla", valor: 200},
//     {nombre: "Microstoft", valor: 500},
//     {nombre: "Meta", valor: 300},
// ];


// listaDeAcciones2.forEach ((acciones) => {
//     console.log (`Este es el nombre de las acciones que te sugerimos ${acciones.nombre} y tiene un valor de ${acciones.valor}`)
// });

// ver de usar un funcion para pedir las propiedades de la persona para ingresar al sitio y registrarse








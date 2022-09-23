//PROMPT
//prompt ("Por favor ingresa tu nombre")
//let nombreUsuario = prompt ("Cual es tu nombre");

//console.log("El nombre ingresado es" + " " + nombreUsuario);

//alert(`Cuidado estas por entrar a un sitio imprevisible ${nombreUsuario}`);


//let nombre = prompt("Cual es tu nombre?");
//let apellido = prompt("Tambien decinos cua es tu apellido");
//let edad = prompt("Por favor decinos tu edad");
//const espacio = " ";

//333alert(`Cuidado ${nombre} ${apellido} de ${edad} anios, ya me diste todos tus datos`);

// let precio = parseFloat(prompt("Cual es el precio"));

// if(precio > 100) {
//     console.log("Que caro!");
// }
// else if (precio == 30) {
//     console.log("Que buenos, justo lo que tengo en el bolsillo");
// }
// else{
//     console.log("Lo llevo");
//}

// let num1 = 1
// let numUno = "1"

// let sonIguales = (num1 === numUno)

// console.log(sonIguales)

//Ejercicio de after class

// alert ("te vamos a decir si el valor es par o inpar");

// let numero = parseInt(prompt("Inserta un valor numerico"));

// if (numero % 2 == 0) {
//     alert(`El numero ${numero} es par`);
// }
//  else if (numero % 2 == 1) {
//     alert(`El numero ${numero} es impar`);
// }
// else {
//     alert("Por favor ingresa un numero entero");
// }


 //Ejercicio After class
 //pedirle al usuario los tres lados de un triangulo y evaluar que tipo de triangulo es.
 //isoceles - dos lados iguales y uno diferente
 //escaleno - los 3 lados diferentes
 //equilatero - todos los lados iguales

// let nombre = prompt ("Hola, cual es tu nombre?");

//  alert (`Hola ${nombre} te vamos a pedir que ingreses unas variables`);
//  alert ("Para este juego elegimos formar un triangulo");
//  alert ("Te pedimos que ingreses cuanto mide cada uno de los lados del triangulo que elegiste");

//  let lado1 = parseInt(prompt("Inserta un valor numerico para el lado 1"));
//  let lado2 = parseInt(prompt("Inserta un valor numerico para el lado 2"));
//  let lado3 = parseInt(prompt("Inserta un valor numerico para el lado 3"));


//  if ((lado1 == lado2) && (lado1 == lado3)){
//     alert ("Es un triangulo equilatero");
//  }
//  else if ((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)){
//     alert ("Es un triangulo escaleno");
//  }
//  else {
//     alert("Es un triangulo isoceles");
//  }


// completando ejecricio para la entrega

alert ("Bienvenidos al sitio de Finanzas de Claudio Vilas");


let pregunta1 = prompt ("Te interesa seguir adelante, si es asi, escribi la palabra, si o claro");

if ((pregunta1 == "si") || (pregunta1 == "claro")){
    alert ("Comencemos");

let nombre = prompt ("Cual es tu nombre");
alert (`Gracias ${nombre} por confiar en nosotros!`);


let tipoDeInversion = prompt ("Que tipo de inversion te gustaria hacer, Arriesgada, moderada o conservadora");

while (tipoDeInversion != "Arriesgada" && tipoDeInversion != "moderada" && tipoDeInversion != "conservadora"){
    alert("Completaste mal los datos, por favor volve a ingresarlos");
    tipoDeInversion = prompt ("Que tipo de inversion te gustaria hacer, Arriesgada, moderada o conservadora");
}

    alert ("Excelente desicion");

    let capital = (parseInt(prompt("Que capital deseas invertir, ingresa el monto sin puntos ni comas y en pesos!!")));

    switch (true) {

    case (capital == 0): 
        alert (`Que lastima ${nombre}, no podremos ayudarte!!!`);

    for (let i = 0; i < 5; i++){
        prompt ("Deberas ingresar la palabra 'salir' 5 veces por no saber ahorrar")
    
    }
    break;

    case (capital >=1) && (capital <= 10000):
         alert (`Excelente ${nombre}, te acosejamos lo siguiente!!!`);
                
        if (tipoDeInversion == "Arriesgada"){
            alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
        }
        else if (tipoDeInversion == "moderada"){
            alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
        }
        else {
            alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
        }
        break;
 
    case (capital >=10001) && (capital <= 100001):
        alert (`Super ${nombre}, te acosejamos lo siguiente!!!`);
        
        if (tipoDeInversion == "Arriesgada"){
            alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
        }
        else if (tipoDeInversion == "moderada"){
            alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
        }
        else {
            alert (`Has elegido invertir ${capital} de un modo ${tipoDeInversion}`)
        }
        break;
        
    default: 
        alert (`Que bueno ${nombre} que puedas invertir a lo grande, te acosejamos lo siguiente!!!`);
        alert ("Por confirar en nosotros, te regalamos un descuento especial, tu inversion se incrementa un 10%")
        
        if (tipoDeInversion == "Arriesgada"){
            alert (`Tu nuevo monto para invertir es ${calcularPromo(capital)} de un modo ${tipoDeInversion}`)
        }
        else if (tipoDeInversion == "moderada"){
            alert (`Tu nuevo monto para invertir es ${calcularPromo(capital)} de un modo ${tipoDeInversion}`)
        }
        else {
            alert (`Tu nuevo monto para invertir es ${calcularPromo(capital)} de un modo ${tipoDeInversion}`)
        }
    }
}

else{
    alert(`Completaste con ${pregunta1} no podemos ayudarte. Gracias.`);
}



function calcularPromo (num1){
    let resultado = (((num1 * 100) / 10) + num1);
    return resultado;
}


// ver de usar un funcion para pedir las propiedades de la persona para ingresar al sitio y registrarse



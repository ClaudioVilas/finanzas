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



//workbook

// let nombre = "Homero"
// let apellido = "Simpson"
// let eedad = 40


// const ciudad1 = "SpringField"
// const ciudad2 = "Buenos aires"
// const ciudad3 = "Jujuy"
// const ciudad4 = "Catamerca"
// const ciudad5 = "Miami"




// class CarnetConducir {
//     constructor(DNI, nombre, apellido, direccion, cumpleanios, sexo) {
//         this.DNI = DNI
//         this.nombre = nombre
//         this.apellido = apellido
//         this.direccion = direccion
//         this.cumpleanios = cumpleanios
//         this.sexo = sexo
//     }
// }

// const Bart = new CarnetConducir (29038395, "claudio", "Simpson", "Avenida siempre libre 123", "20-08-2022", "Masculino");
// console.log(CarnetConducir);


// for (let i = 0; i < 5; i = i + 1){
// prompt("Deberas ingresar 5 nombres");
// }

// let nombre = "Claudio\n";
// let apellido = "Vilas\n";
// let direccion = "Rivadavia 5555\n";
// let nacimiento = "09-09-09\n";
// const dni = "29.038.395\n";

// let CarnetConducir = 
//     "Nombre: "+nombre+" "+
//     "Apellido: "+apellido+" "+
//     "Direccion: "+direccion+" "+
//     "Nacimiento: "+nacimiento+" "+
//     "DNI: "+dni+" ";

// console.log (CarnetConducir);



// let apellidoFamilia1 = prompt ("Ingresa el apellido de una familia\n");
// let apellidoFamilia2 = prompt ("Ingresa el apellido de una familia\n");
// let apellidoFamilia3 = prompt ("Ingresa el apellido de una familia\n");
// let apellidoFamilia4 = prompt (`Ingresa el apellido de una familia\n`);
// let apellidoFamilia5 = prompt (`Ingresa el apellido de una familia\n`);

// let familia = "1)"+apellidoFamilia1+""+
// "2)"+apellidoFamilia2+""+
// "3)"+apellidoFamilia3+""+
// "4)"+apellidoFamilia4+""+
// "5)"+apellidoFamilia5+""

// console.log (familia)




// let valor = parseInt(prompt ("por favor ingrese un precio"));
// function descuento  (num1){
//     let resultado = (num1 - ((num1 * 20)/100));
//     return resultado;
// }

// alert (`Tu resultado es ${descuento(valor)}`);

// let nombre = prompt ("Ingresa el nombre claudio para salir")

// while (nombre != "claudio"){
//    alert (`Has ingresado el nombre ${nombre} , debes poner 'claudio' para salir`);
//    nombre = prompt ("Ingresa el nombre claudio para salir");
// }

// let teclaSalida = prompt ("Preciona la tecla y o Y para salir");

// while (teclaSalida != "y" && teclaSalida != "Y"){
//     alert ("Has precionado una tecla incorrecta");
//     teclaSalida = prompt ("Preciona la tecla y o Y para salir");

// }
// alert ("Has precionado una tecla de forma correcta, felicitaciones");



// function findAverage(array) {
//     if (findAverage != 0){
//       return  array.map / array.length;
//     }
    
//   else {
//       return 0;
//   }
//   }
  
//   console.log(findAverage(array[2,4]));


//  let array = [1,2,3,5];
//  if (array !=0){
//     return  array.map / array.length;
//  }
// else{
//     return 0;
// }

// let array = [1,2,3,5];

// let arrayAverage = array.map(function(x){
//  return x / 2;
// })

// console.log(arrayAverage);

// console.log(array.map.function(x));

// let resultado = array.length

// const nbPetals = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  
// console.log(nbPetals.findIndex);




// var character = 'A';
// if (character == character.toUpperCase())
//  { alert ('upper case true'); } 
//  if (character == character.toLowerCase()){ alert ('lower case true'); }



let nombre = document.getElementById("nombre").value;
let enviar = document.getElementById("enviar");

const alerta = () =>{
    alert ("esto sin sweet alert funciona de maravilla");
}

enviar.addEventListener("click", alerta)

console.log(nombre);
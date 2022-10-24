// funciona para que cuando se presiona el boton enviar de la pagina contactos salgaun cartel de tus datos han sido enviados

let boton = document.getElementById("boton");
let nombreUsuario = document.getElementById("nombreUsuario").value;
let edadUsuario = document.getElementById("edadUsuario").value;
let mailUsuario = document.getElementById("mailUsuario").value;
let sinconocimientos = document.getElementById("")
let conconocimientos = document.getElementById("")
let conocimiento0a3 = document.getElementById("conocimiento0a3").value;
let conocimiento3a5 = document.getElementById("conocimiento3a5").value;
let conocimiento5amas = document.getElementById("conocimiento5amas").value;



const alerta =() =>{
        
        Swal.fire ("Tus datos se enviaron con exito!!");
        localStorage.setItem("nombreUsuario", nombreUsuario);
        localStorage.setItem("edadUsuario", edadUsuario);
        localStorage.setItem("mailUsuario", mailUsuario);
        localStorage.setItem("conocimiento0a3", conocimiento0a3);
        localStorage.setItem("conocimiento3a5", conocimiento3a5);
        localStorage.setItem("conocimiento5amas", conocimiento5amas);

}
 
 boton.addEventListener("click", alerta); 




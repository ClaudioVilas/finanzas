// funciona para que cuando se presiona el boton enviar de la pagina contactos salgaun cartel de tus datos han sido enviados



let boton = document.getElementById("boton");


boton.addEventListener ("click", function() {

        alert ("Tus datos se enviaron con exito!!");
        
        localStorage.setItem("nombreUsuario", nombreUsuario.value);

        localStorage.setItem("edadUsuario", edadUsuario.value);

        localStorage.setItem("mailUsuario", mailUsuario.value);
        
        if (document.getElementById ("expe").value = 1){ window.location.href ="../pages/sinconocimientos.html"}

        else if (document.getElementById("expe").value == 2 ){ window.location.href ="../pages/conocimientode0a5anos.html"}

        else if (document.getElementById("expe").value == 3 ){ window.location.href ="../pages/conocimientode3a5anos.html"}

        else if (document.getElementById("expe").value == 4 ){ window.location.href ="../pages/conocimientodemasde5anos.html"}
     
});




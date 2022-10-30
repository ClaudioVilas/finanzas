// funciona para que cuando se presiona el boton enviar de la pagina contactos salgaun cartel de tus datos han sido enviados



let boton = document.getElementById("boton");


boton.addEventListener ("click", (e) =>{

        e.preventDefault();
           
        localStorage.setItem("nombreUsuario", nombreUsuario.value);

        localStorage.setItem("edadUsuario", edadUsuario.value);

        localStorage.setItem("mailUsuario", mailUsuario.value);

        Swal.fire('Tu datoa han diso enviados correctamente').then (() =>  {
        
        if (document.getElementById ("expe").value == 1){document.location.href ="../pages/sinconocimientos.html"}

        else if (document.getElementById("expe").value == 2 ){ document.location.href ="../pages/conocimientode0a5anos.html"}

        else if (document.getElementById("expe").value == 3 ){ document.location.href ="../pages/conocimientode3a5anos.html"}

        else if (document.getElementById("expe").value == 4 ){ document.location.href ="../pages/conocimientodemasde5anos.html"}
        })
     
});









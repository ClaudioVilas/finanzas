// funciona para que cuando se presiona el boton enviar de la pagina contactos salgaun cartel de tus datos han sido enviados

let boton = document.getElementById("boton");


boton.addEventListener ("click", function() {
       alert ("Tus datos se enviaron con exito!!");
                
        localStorage.setItem("nombreUsuario", nombreUsuario.value);
        localStorage.setItem("edadUsuario", edadUsuario.value);
        localStorage.setItem("mailUsuario", mailUsuario.value);
        localStorage.setItem("conocimientos", conocimientos.value);
        localStorage.setItem("ceroatres", ceroatres.value);
        localStorage.setItem("tresacinco", tresacinco.value);
        localStorage.setItem("cincoomas", cincoomas.value);
        // localStorage.setItem("conconocimientos", conconocimientos.value);
        // localStorage.setItem("comentarios", comentarios.value);
        // localStorage.setItem("experiencia", experiencia.value);

});

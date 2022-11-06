// funciona para que cuando se presiona el boton enviar de la pagina contactos salgaun cartel de tus datos han sido enviados



let boton = document.getElementById("my-form-button");
let mailUsuario = document.querySelector("#mailUsuario")

boton.addEventListener ("click", (e) =>{

        e.preventDefault();
           
        localStorage.setItem("nombreUsuario", nombreUsuario.value);

        localStorage.setItem("edadUsuario", edadUsuario.value);

        if (localStorage.getItem ("mailUsuario") != document.querySelector("#mailUsuario").value){

        localStorage.setItem("mailUsuario", mailUsuario.value);

        Swal.fire('Tu datos han sido enviados correctamente').then (() =>  {
        
        if (document.getElementById ("expe").value == 1){document.location.href ="../pages/sinconocimientos.html"}

        else if (document.getElementById("expe").value == 2 ){ document.location.href ="../pages/conocimientode0a5anos.html"}

        else if (document.getElementById("expe").value == 3 ){ document.location.href ="../pages/conocimientode3a5anos.html"}

        else if (document.getElementById("expe").value == 4 ){ document.location.href ="../pages/conocimientodemasde5anos.html"}
        })

}

else{
        e.preventDefault()
        Swal.fire('Tu datos ya han sido ingresado te enviaremos al carrito de compras').then(() => {
        {document.location.href ="../pages/conocimientode3a5anos.html"}
        })
        ;
}
     
}
);



const form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit);







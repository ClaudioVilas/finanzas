const acciones = document.getElementById("acciones");


listaProductos.forEach((producto) => {
    const select = document.createElement('select');
    select.innerHTML =`
        <select name="select">
            <option> ${producto.nombre[1]}</option>
        </select>
          `

    acciones.appendChild(select);
});




// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA
let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;


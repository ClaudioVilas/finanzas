const acciones = document.getElementById("acciones");


listaProductos.forEach((producto) => {
    const select = document.createElement('option');
    select.innerHTML =
        `
        <option> ${producto.nombre}</option>
        `
    acciones.appendChild(select);
});



const tipo = document.getElementById("tipo");

listaProductos.forEach((producto) => {
    const select = document.createElement('option');
    select.innerHTML =
        `
        <option> ${producto.tipo}</option>
        `
    tipo.appendChild(select);
});


// LLAMA AL NOMBRE DE USUARIO GUARDADO EN EL LOCAL Y LO AGREGA EN EL BANNER ARRIBA A LA DERECHA

let UsuarioEncabezado = localStorage.getItem("nombreUsuario");
banner2.innerText = `Bienvenido ${UsuarioEncabezado}`;






 
// Elemento del HTML donde se van a mostrar los productos
const contenedorProductos = document.querySelector("#lista-productos");

// Botones que permiten filtrar por categoría
const botonesFiltro = document.querySelectorAll(".filtro-boton");

// Esta función recibe un producto y devuelve una tarjeta HTML
function retornarCardHTML(producto) {
    let precio = producto.precio.toLocaleString("es-AR");

    return `
        <div class="producto-card">
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <div class="producto-info">
                <p class="producto-categoria">${producto.categoria}</p>
                <h3>${producto.nombre}</h3>
                <p class="producto-precio">$${precio}</p>
                <a href="contacto.html" class="producto-detalle">Consultar</a>
            </div>
        </div>
    `;
}

// Recorremos el array y mostramos cada producto en la página
function cargarProductos(array) {
    contenedorProductos.innerHTML = "";

    array.forEach(function(producto) {
        contenedorProductos.innerHTML += retornarCardHTML(producto);
    });
}

// Filtramos los productos cuando se presiona un botón
botonesFiltro.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const categoria = boton.dataset.categoria;

        botonesFiltro.forEach(function(otroBoton) {
            otroBoton.classList.remove("activo");
        });

        boton.classList.add("activo");

        if (categoria === "todos") {
            cargarProductos(productos);
        } else {
            const productosFiltrados = productos.filter(function(producto) {
                return producto.categoria === categoria;
            });

            cargarProductos(productosFiltrados);
        }
    });
});

// Al abrir la página mostramos todo el catálogo
cargarProductos(productos);

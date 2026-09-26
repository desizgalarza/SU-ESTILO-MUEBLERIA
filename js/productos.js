// Elemento del HTML donde se van a mostrar los productos
const contenedorProductos = document.querySelector("#lista-productos");

// Botones que permiten filtrar por categoría
const botonesFiltro = document.querySelectorAll(".filtro-boton");

// Esta función recibe un producto y devuelve una tarjeta HTML
function retornarCardHTML(producto) {
    let precio = producto.precio.toLocaleString("es-AR");
    let precioHTML = `<p class="producto-precio">$${precio}</p>`;

    if (producto.oferta === true && producto.precioAnterior) {
        let precioAnterior = producto.precioAnterior.toLocaleString("es-AR");

        precioHTML = `
            <p class="producto-precio">
                Antes: <del>$${precioAnterior}</del><br>
                Ahora: $${precio}
            </p>
        `;
    }

    return `
        <div class="producto-card">
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <div class="producto-info">
                <p class="producto-categoria">${producto.categoria}</p>
                <h3>${producto.nombre}</h3>
                ${precioHTML}
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

// Filtra los productos según la opción elegida
function filtrarProductos(categoria) {
    if (categoria === "todos") {
        cargarProductos(productos);
    } else if (categoria === "ofertas") {
        const productosEnOferta = productos.filter(function(producto) {
            return producto.oferta === true;
        });

        cargarProductos(productosEnOferta);
    } else {
        const productosFiltrados = productos.filter(function(producto) {
            return producto.categoria === categoria;
        });

        cargarProductos(productosFiltrados);
    }
}

// Marca visualmente el filtro seleccionado
function marcarFiltroActivo(categoria) {
    botonesFiltro.forEach(function(boton) {
        boton.classList.remove("activo");

        if (boton.dataset.categoria === categoria) {
            boton.classList.add("activo");
        }
    });
}

// Filtramos los productos cuando se presiona un botón
botonesFiltro.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const categoria = boton.dataset.categoria;

        marcarFiltroActivo(categoria);
        filtrarProductos(categoria);
    });
});

// Si se llega desde Inicio con una categoría en la dirección,
// mostramos directamente esa categoría.
const parametros = new URLSearchParams(window.location.search);
const categoriaInicial = parametros.get("categoria") || "todos";

marcarFiltroActivo(categoriaInicial);
filtrarProductos(categoriaInicial);

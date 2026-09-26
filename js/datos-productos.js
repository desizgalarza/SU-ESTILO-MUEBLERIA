const productos = [

    {
        id: 1,
        nombre: "Alacena y bajo mesada de 1,60 metros",
        categoria: "cocina",
        precio: 635400,
        imagen: "img/productos/alacenaybajomesada.jpeg",
        oferta: false
    },

    {
        id: 2,
        nombre: "Alacena y bajo mesada de 1,20 metros",
        categoria: "cocina",
        precio: 513000,
        imagen: "img/productos/alacenaybajomesada3puertas.jpeg",
        oferta: false
    },

    {
        id: 3,
        nombre: "Alacena y bajo mesada de 2 metros",
        categoria: "cocina",
        precio: 738000,
        imagen: "img/productos/alacenaybajomesada5puertas.jpeg",
        oferta: false
    },

    {
        id: 4,
        nombre: "Alacena y bajo mesada de 1,60 metros pintada",
        categoria: "cocina",
        precio: 1143720,
        imagen: "img/productos/alacenaybajomesadapintada.jpeg",
        oferta: false
    },

    {
        id: 5,
        nombre: "Comoda de 1,20 metros",
        categoria: "dormitorio",
        precio: 127800,
        imagen: "img/productos/bahiut.jpeg",
        oferta: false
    },

    {
        id: 6,
        nombre: "Chifonier de 1 metro",
        categoria: "dormitorio",
        precio: 207000,
        imagen: "img/productos/chifonier.jpeg",
        oferta: false
    },

    {
        id: 7,
        nombre: "Chifonier de 1,10 por 0,75 metros",
        categoria: "dormitorio",
        precio: 176400,
        imagen: "img/productos/chifonier4cajones.jpeg",
        oferta: false
    },

    {
        id: 8,
        nombre: "Chifonier pintado de 1 metro",
        categoria: "dormitorio",
        precio: 230040,
        imagen: "img/productos/chifonierpintados.jpeg",
        oferta: false
    },

    {
        id: 9,
        nombre: "Bahiut ECO de 1,20 metros",
        categoria: "comedor",
        precio: 255600,
        imagen: "img/productos/comoda3puertas.jpeg",
        oferta: false
    },

    {
        id: 10,
        nombre: "Despensero de 0,40 metros",
        categoria: "cocina",
        precio: 378000,
        imagen: "img/productos/cristalera-con-y-sin-vidrio.jpeg",
        oferta: false
    },

    {
        id: 11,
        nombre: "Cristalero de 0,80 metros pintado",
        categoria: "comedor",
        precio: 432000,
        imagen: "img/productos/cristaleroblanco.jpeg",
        oferta: false
    },

    {
        id: 12,
        nombre: "Modular de 0,80 metros pintado",
        categoria: "comedor",
        precio: 459000,
        imagen: "img/productos/cristalerosgrandespintados.jpg",
        oferta: false
    },

    {
        id: 13,
        nombre: "Escritorio de 1 por 0,50 metros",
        categoria: "a-medida",
        precio: 176400,
        imagen: "img/productos/escritorio.jpeg",
        oferta: false
    },

    {
        id: 14,
        nombre: "Juego de comedor Mesa Ergo - 4 sillas Alpha",
        categoria: "comedor",
        precio: 580000,
        precioAnterior: 673230,
        imagen: "img/productos/juegodecomedor4sillasale.jpeg",
        oferta: true
    },

    {
        id: 15,
        nombre: "Juego de comedor Mesa Nórdica - 4 sillas Issa",
        categoria: "comedor",
        precio: 450000,
        precioAnterior: 553250,
        imagen: "img/productos/juegodecomedor4sillasolivia.jpeg",
        oferta: true
    },

    {
        id: 16,
        nombre: "Juego de comedor de 1,20 por 0,80 metros - 4 sillas Hindú",
        categoria: "comedor",
        precio: 400000,
        precioAnterior: 486000,
        imagen: "img/productos/juegodecomedor4sillaspino.jpeg",
        oferta: true
    },

    {
        id: 17,
        nombre: "Juego de comedor Mesa Ergo de 1,50 metros - 6 sillas Alpha",
        categoria: "comedor",
        precio: 842099,
        imagen: "img/productos/juegodecomedor6sillasnogal.jpeg",
        oferta: false
    },

    {
        id: 18,
        nombre: "Juego de living con camastro móvil",
        categoria: "living",
        precio: 1260000,
        imagen: "img/productos/juegodelivinconcamastro.jpeg",
        oferta: false
    },

    {
        id: 19,
        nombre: "Sofá Eco Cuero de 1,60 metros",
        categoria: "living",
        precio: 774000,
        imagen: "img/productos/juegodeliving2cuerpos.jpeg",
        oferta: false
    },

    {
        id: 20,
        nombre: "Juego de living esquinero con mesa ratona",
        categoria: "living",
        precio: 1500000,
        imagen: "img/productos/juegodelivingconmesia.jpeg",
        oferta: false
    },

    {
        id: 21,
        nombre: "Mesa de 2,20 metros pata tipo X ",
        categoria: "comedor",
        precio: 378000,
        imagen: "img/productos/mesa2,20metros.jpeg",
        oferta: false
    },

    {
        id: 22,
        nombre: "Mesa de noche con cajón",
        categoria: "dormitorio",
        precio: 74400,
        imagen: "img/productos/mesadenoche.jpeg",
        oferta: false
    },

    {
        id: 23,
        nombre: "Juego de comedor Mesa Nórdica - 4 sillas Emmi",
        categoria: "comedor",
        precio: 500000,
        precioAnterior: 615485,
        imagen: "img/productos/mesa-paraiso-nogal-4sillas.jpeg",
        oferta: true
    },

    {
        id: 24,
        nombre: "Mesita de noche pata torcida",
        categoria: "dormitorio",
        precio: 74400,
        imagen: "img/productos/mesita.jpeg",
        oferta: false
    },

    {
        id: 25,
        nombre: "Mesa recibidor",
        categoria: "living",
        precio: 216000,
        imagen: "img/productos/mesitarecibidor.jpeg",
        oferta: false
    },

    {
        id: 26,
        nombre: "Mesita de noche con cajón y baulera",
        categoria: "dormitorio",
        precio: 74400,
        imagen: "img/productos/mesitasdeluz.jpeg",
        oferta: false
    },

    {
        id: 27,
        nombre: "Mesita de luz con cajón y puerta",
        categoria: "dormitorio",
        precio: 74400,
        imagen: "img/productos/mesitasdeluz2.jpeg",
        oferta: false
    },

    {
        id: 28,
        nombre: "Modular de 1,60 m",
        categoria: "comedor",
        precio: 522000,
        imagen: "img/productos/modular-1,60.jpeg",
        oferta: false
    },

    {
        id: 29,
        nombre: "Rack para microondas pintado negro",
        categoria: "cocina",
        precio: 414000,
        imagen: "img/productos/rack-microondas.jpeg",
        oferta: false
    },

    {
        id: 30,
        nombre: "Rack para microondas pintado marrón",
        categoria: "cocina",
        precio: 414000,
        imagen: "img/productos/rack-microondas-marron.jpeg",
        oferta: false
    },

    {
        id: 31,
        nombre: "Rack para microondas y horno rústico",
        categoria: "cocina",
        precio: 450000,
        imagen: "img/productos/rack-microondas-y-horno.jpeg",
        oferta: false
    },

    {
        id: 32,
        nombre: "Ropero 1,20 metros pintado",
        categoria: "dormitorio",
        precio: 1215000,
        imagen: "img/productos/ropero-1,20m-marron.jpeg",
        oferta: false
    },

    {
        id: 33,
        nombre: "Ropero 1,60 metros con alzada",
        categoria: "dormitorio",
        precio: 945000,
        imagen: "img/productos/ropero-1,60m-con-baulera.jpeg",
        oferta: false
    },

    {
        id: 34,
        nombre: "Despensero de 0,80 metros",
        categoria: "cocina",
        precio: 378000,
        imagen: "img/productos/despensero.jpeg",
        oferta: false
    },

    {
        id: 35,
        nombre: "Vestidor de 1,20 metros con cajones",
        categoria: "dormitorio",
        precio: 216000,
        imagen: "img/productos/vestidor.jpeg",
        oferta: false
    }

];

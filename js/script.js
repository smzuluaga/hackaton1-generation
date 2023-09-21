
const listaProductosPapeles = [{"nombre": "Blog Eco", "precio": 15000},{"nombre": "Carpetas Eco", "precio": 3500},{"nombre": "Eco Sobres", "precio": 1000},{"nombre": "Libreta Sencilla", "precio": 4800},{"nombre": "Libreta Eco + Lapicero", "precio": 7000},{"nombre": "Libreta 100 Páginas", "precio": 9000},{"nombre": "Papel Cartón Corrugado", "precio": 3500},{"nombre": "Papel de Yuca", "precio": 3900},{"nombre": "Resma-eco", "precio": 45000}];
const listaProductosLapiceros = [{"nombre": "Eco Lapicero Larga Duración", "precio": 2500},{"nombre": "Eco-Duo", "precio": 1800},{"nombre": "Kit 4 Eco-Lapiceros", "precio": 5500},{"nombre": "Eco Lapicero Delgado", "precio": 2000},{"nombre": "Kit Ecolores", "precio": 10000},{"nombre": "Kit Libreta + Ecolores", "precio": 4500},{"nombre": "Kit Eco Portaminas", "precio": 6000},{"nombre": "Eco lapicero multicolor", "precio": 3000},{"nombre": "Portaminas Eco", "precio": 2000}];
const listaProductosPinturas = [{"nombre": "Acrílico Ecológico", "precio": 3000},{"nombre": "Acuarela Ecológica", "precio": 29000},{"nombre": "Eco Pintura", "precio": 3500},{"nombre": "Kit Pinturas", "precio": 39000},{"nombre": "Paleta de Pintura", "precio": 5000},{"nombre": "Pinceles Eco", "precio": 9900},{"nombre": "Pintura + Brocha Eco", "precio": 26500},{"nombre": "Rodillo Ecológico", "precio": 25000},{"nombre": "Tintas Ecológicas", "precio": 14900}];
const listaProductosVida = [{"nombre": "Bolsa de Tela Grande", "precio": 12000}, {"nombre": "Bolsa de Yute", "precio": 6500}, {"nombre": "Cepillo de Dientes Ecológico", "precio": 3000}, {"nombre": "Eco Vaso Portable", "precio": 8900}, {"nombre": "Kit Cepillos Ecológicos", "precio": 59000}, {"nombre": "Vasos Plegables", "precio": 6500}, {"nombre": "Termo Plegable", "precio": 29900}, {"nombre": "Materas Ecológicas", "precio": 14900}, {"nombre": "Kit Eco Cubiertos", "precio": 20000}];
const carritoCompras = [];
let  cantidadProductos = carritoCompras.length;

//papeles - lapiceros - vida diaria - pinturas
const producto1 = document.getElementById("producto1-cat1")
producto1.innerHTML = listaProductosPapeles[0].nombre;
const producto2 = document.getElementById("producto2-cat1")
producto2.innerHTML = listaProductosPapeles[1].nombre;
const producto3 = document.getElementById("producto3-cat1")
producto3.innerHTML = listaProductosPapeles[2].nombre;
const producto4 = document.getElementById("producto4-cat1")
producto4.innerHTML = listaProductosPapeles[3].nombre;
const producto5 = document.getElementById("producto5-cat1")
producto5.innerHTML = listaProductosPapeles[4].nombre;
const producto6 = document.getElementById("producto6-cat1")
producto6.innerHTML = listaProductosPapeles[5].nombre;
const producto7 = document.getElementById("producto7-cat1")
producto7.innerHTML = listaProductosPapeles[6].nombre;
const producto8 = document.getElementById("producto8-cat1")
producto8.innerHTML = listaProductosPapeles[7].nombre;
const producto9 = document.getElementById("producto9-cat1")
producto9.innerHTML = listaProductosPapeles[8].nombre;
const producto10 = document.getElementById("producto1-cat2")
producto10.innerHTML = listaProductosLapiceros[0].nombre;
const producto11 = document.getElementById("producto2-cat2")
producto11.innerHTML = listaProductosLapiceros[1].nombre;
const producto12 = document.getElementById("producto3-cat2")
producto12.innerHTML = listaProductosLapiceros[2].nombre;
const producto13 = document.getElementById("producto4-cat2")
producto13.innerHTML = listaProductosLapiceros[3].nombre;
const producto14 = document.getElementById("producto5-cat2")
producto14.innerHTML = listaProductosLapiceros[4].nombre;
const producto15 = document.getElementById("producto6-cat2")
producto15.innerHTML = listaProductosLapiceros[5].nombre;
const producto16 = document.getElementById("producto7-cat2")
producto16.innerHTML = listaProductosLapiceros[6].nombre;
const producto17 = document.getElementById("producto8-cat2")
producto17.innerHTML = listaProductosLapiceros[7].nombre;
const producto18 = document.getElementById("producto9-cat2")
producto18.innerHTML = listaProductosLapiceros[8].nombre;
const producto19 = document.getElementById("producto1-cat3")
producto19.innerHTML = listaProductosPinturas[0].nombre;
const producto20 = document.getElementById("producto2-cat3")
producto20.innerHTML = listaProductosPinturas[1].nombre;
const producto21 = document.getElementById("producto3-cat3")
producto21.innerHTML = listaProductosPinturas[2].nombre;
const producto22 = document.getElementById("producto4-cat3")
producto22.innerHTML = listaProductosPinturas[3].nombre;
const producto23 = document.getElementById("producto5-cat3")
producto23.innerHTML = listaProductosPinturas[4].nombre;
const producto24 = document.getElementById("producto6-cat3")
producto24.innerHTML = listaProductosPinturas[5].nombre;
const producto25 = document.getElementById("producto7-cat3")
producto25.innerHTML = listaProductosPinturas[6].nombre;
const producto26 = document.getElementById("producto8-cat3")
producto26.innerHTML = listaProductosPinturas[7].nombre;
const producto27 = document.getElementById("producto9-cat3")
producto27.innerHTML = listaProductosPinturas[8].nombre;
const producto28 = document.getElementById("producto1-cat4")
producto28.innerHTML = listaProductosVida[0].nombre;
const producto29 = document.getElementById("producto2-cat4")
producto29.innerHTML = listaProductosVida[1].nombre;
const producto30 = document.getElementById("producto3-cat4")
producto30.innerHTML = listaProductosVida[2].nombre;
const producto31 = document.getElementById("producto4-cat4")
producto31.innerHTML = listaProductosVida[3].nombre;
const producto32 = document.getElementById("producto5-cat4")
producto32.innerHTML = listaProductosVida[4].nombre;
const producto33 = document.getElementById("producto6-cat4")
producto33.innerHTML = listaProductosVida[5].nombre;
const producto34 = document.getElementById("producto7-cat4")
producto34.innerHTML = listaProductosVida[6].nombre;
const producto35 = document.getElementById("producto8-cat4")
producto35.innerHTML = listaProductosVida[7].nombre;
const producto36 = document.getElementById("producto9-cat4")
producto36.innerHTML = listaProductosVida[8].nombre;


function agregarProducto (producto, precio) {
    

    carritoCompras.push({'producto': producto, 'precio': precio});
    
    // console.log(producto);
    console.log(carritoCompras);
};

function agregar1 () {
    
    let producto = producto1.innerHTML;
    let precio = listaProductosPapeles[0].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar2 () {
    
    let producto = producto2.innerHTML;
    let precio = listaProductosPapeles[1].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar3 () {
    
    let producto = producto3.innerHTML;
    let precio = listaProductosPapeles[2].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar4 () {
    
    let producto = producto4.innerHTML;
    let precio = listaProductosPapeles[3].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar5 () {
    
    let producto = producto5.innerHTML;
    let precio = listaProductosPapeles[4].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar6 () {
    
    let producto = producto6.innerHTML;
    let precio = listaProductosPapeles[5].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar7 () {
    
    let producto = producto7.innerHTML;
    let precio = listaProductosPapeles[6].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar8 () {
    
    let producto = producto8.innerHTML;
    let precio = listaProductosPapeles[7].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar9 () {
    
    let producto = producto9.innerHTML;
    let precio = listaProductosPapeles[8].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

// 
function agregar10 () {
    
    let producto = producto10.innerHTML;
    let precio = listaProductosLapiceros[0].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar11 () {
    
    let producto = producto11.innerHTML;
    let precio = listaProductosLapiceros[1].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar12 () {
    
    let producto = producto12.innerHTML;
    let precio = listaProductosLapiceros[2].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar13 () {
    
    let producto = producto13.innerHTML;
    let precio = listaProductosLapiceros[3].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar14 () {
    
    let producto = producto14.innerHTML;
    let precio = listaProductosLapiceros[4].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar15 () {
    
    let producto = producto15.innerHTML;
    let precio = listaProductosLapiceros[5].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar16 () {
    
    let producto = producto16.innerHTML;
    let precio = listaProductosLapiceros[6].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar17 () {
    
    let producto = producto17.innerHTML;
    let precio = listaProductosLapiceros[7].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar18 () {
    
    let producto = producto18.innerHTML;
    let precio = listaProductosLapiceros[8].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar19 () {
    
    let producto = producto19.innerHTML;
    let precio = listaProductosPinturas[0].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar20 () {
    
    let producto = producto20.innerHTML;
    let precio = listaProductosPinturas[1].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar21 () {
    
    let producto = producto21.innerHTML;
    let precio = listaProductosPinturas[2].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar22 () {
    
    let producto = producto22.innerHTML;
    let precio = listaProductosPinturas[3].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar23 () {
    
    let producto = producto23.innerHTML;
    let precio = listaProductosPinturas[4].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}


function agregar24 () {
    
    let producto = producto24.innerHTML;
    let precio = listaProductosPinturas[5].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar25 () {
    
    let producto = producto25.innerHTML;
    let precio = listaProductosPinturas[6].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar26 () {
    
    let producto = producto26.innerHTML;
    let precio = listaProductosPinturas[7].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar27 () {
    
    let producto = producto27.innerHTML;
    let precio = listaProductosPinturas[8].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar28 () {
    
    let producto = producto28.innerHTML;
    let precio = listaProductosVida[0].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar29 () {
    
    let producto = producto29.innerHTML;
    let precio = listaProductosVida[1].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar30 () {
    
    let producto = producto30.innerHTML;
    let precio = listaProductosVida[2].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}


function agregar31 () {
    
    let producto = producto31.innerHTML;
    let precio = listaProductosVida[3].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar32 () {
    
    let producto = producto32.innerHTML;
    let precio = listaProductosVida[4].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar33 () {
    
    let producto = producto33.innerHTML;
    let precio = listaProductosVida[5].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar34 () {
    
    let producto = producto34.innerHTML;
    let precio = listaProductosVida[6].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
}

function agregar35 () {
    
    let producto = producto35.innerHTML;
    let precio = listaProductosVida[7].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
};

function agregar36 () {
    
    let producto = producto36.innerHTML;
    let precio = listaProductosVida[8].precio;
    agregarProducto (producto, precio);
    mostrarProdCarrito (producto, precio);
};

//

// MOSTRAR CARRITO DE COMPRAS


function mostrarProdCarrito (producto, precio){

    let boardProducts = document.getElementById("products");

    let li = document.createElement("li");
    let containerProd = document.createElement("p");
    let containerPrecio = document.createElement("p");

    containerProd.innerHTML = producto ;
    containerPrecio.innerHTML = `$${precio}`;

    li.appendChild(containerProd);
    li.appendChild(containerPrecio);

    boardProducts.appendChild(li);
    console.log(carritoCompras);
    
    let total = 0;
    for (let i=0; i<carritoCompras.length;i++) {
        total += Number(carritoCompras[i].precio);
    }
    
    console.log(total);

    let subtotal = document.getElementById("subtotal");
    let impuestos = document.getElementById("impuestos");
    let envio = document.getElementById("envio");
    let net = document.getElementById("total");

    subtotal.innerHTML =total;
    impuestos.innerHTML = total*0.19;
    envio.innerHTML = 10000;
    net.innerHTML = total * 1.19 + 10000;
}

function goToCarrito () {

    let seccionCarrito = document.getElementById("sect-carrito");
    seccionCarrito.style="display: block";
}

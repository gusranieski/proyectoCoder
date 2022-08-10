//-CONSTRUCTOR-
class Producto {
    constructor(nombre, precio, codigo, stock, imagen) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.codigo = codigo;
    this.stock = parseInt(stock);
    this.imagen = imagen;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("banco niza",11000,"m01",10,"banco00"));
productos.push(new Producto("mesa londres",15500,"m02",10,"escritorio00"));
productos.push(new Producto("mueble york",7850,"m03",10,"estanteria00"));
productos.push(new Producto("mueble mini york",5050,"m04",10,"estanteria01"));
productos.push(new Producto("mesa zagreb",15600,"m05",10,"mesaratona00"));
productos.push(new Producto("mesa panama",6800,"m06",10,"mesaratona01"));
productos.push(new Producto("perchero gales",6300,"m07",10,"perchero00"));
productos.push(new Producto("perchero lyon",4050,"m08",10,"perchero001"));
//-(se muestran por consola agregándole el IVA)-
for(const prod of productos){
    prod.sumaIva();
    }
    console.table(productos);

//DOM-(se crean las cartas en el html)
function crearTarjeta(){
    let cartas = document.getElementById("cartas");
    for(const prod of productos){
        let carta = document.createElement("div");
        carta.className="items col-12 col-md-6 col-lg-3";
        carta.innerHTML=`<div>
        <img class="img-fluid mt-4" src="../imagenes/todos los productos/${prod.imagen}.jpg" alt="">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <p>Stock: ${prod.stock}</p>
        <button id="btn1" class="btn btn-warning">Comprar</button>
    </div>
        `;
        cartas.append(carta);
    }
}

crearTarjeta()

let botonComprar = document.getElementById("btn1");    
    
    
//-SALUDO-
function saludar() {
    let hora=new Date();
    alert("¡Bienvenidos a MUEBLITO!"+"\n"+hora.toLocaleString());
}
saludar ();

//-CONSULTA PRODUCTOS-
let seleccionarProd = prompt("Ingresa un producto:\nbanco niza\nmesa londres\nmueble york\nmueble mini york\nmesa zagreb\nmesa panama\nperchero gales\nperchero lyon");
let carrito=[];
while(seleccionarProd != "finalizar"){
    let prodElegido = productos.find((prod) => prod.nombre == seleccionarProd);
    console.log(prodElegido);
    if(prodElegido != undefined){
        carrito.push(prodElegido);
        alert("Producto agregado");
        console.table(carrito);
    }else{
        alert("Producto no encontrado")
    }
    seleccionarProd=prompt("Ingresa otro producto ó (finalizar)")
}
//REDUCE-(se suma el total del carrito)
const total = carrito.reduce((acc,prod) => acc+prod.precio,0);
alert("Total de la suma $"+total)
console.log("Total de la suma $"+total)
    

//MAP-(se pasan a mayúsculas los nombres)
const actualizado = productos.map((prod) => {
    return {
    nombre: prod.nombre.toLowerCase(),
    precio: prod.precio 
    }
})
console.table(actualizado);

//FIND-(buscador de productos por código)
function buscador(){
    let consultaCodigo=prompt("Ingresa el código del producto para saber si hay stock");
    const busqueda = productos.find((prod) => prod.codigo === consultaCodigo);
    if(busqueda != undefined){
        alert("Hay stock de: "+busqueda.nombre);
        console.log(busqueda);
    }else{
        alert("No hay stock");
        consultaCodigo = prompt("Ingresa el código del producto");
    }
}

buscador();

//FILTER-(se filtran los productos menores a precio ingresado)
function filtrar(){
    let filtrarBaratos = parseInt(prompt("Ingresa un precio para ver los más baratos"));
    const filtroPrecio = productos.filter((prod) => prod.precio < filtrarBaratos );
    console.table(filtroPrecio);
}

filtrar();

//-DESPEDIDA-
function despedir() {
    alert("Gracias por tu compra!!")
}
despedir()





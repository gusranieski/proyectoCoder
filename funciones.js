//-CONSTRUCTOR-
class Producto {
    constructor(nombre, precio, codigo, vendido) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.codigo = codigo;
    this.vendido = vendido;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("banco niza", 11000,"m01", true));
productos.push(new Producto("mesa londres", 15500,"m02", true));
productos.push(new Producto("mueble york", 7850,"m03", false));
productos.push(new Producto("mueble mini york", 5050,"m04",true));
productos.push(new Producto("mesa zagreb", 15600,"m05", false));
productos.push(new Producto("mesa panama", 6800,"m06", true));
productos.push(new Producto("perchero gales", 6300,"m07", true));
productos.push(new Producto("perchero lyon", 4050,"m08", true));
//-(se muestran por consola agregándole el IVA)-
for(const prod of productos){
    prod.sumaIva();
    }
    console.table(productos);
    
    
//-SALUDO-
function saludar() {
    let hora=new Date();
    alert("¡Bienvenidos a MUEBLITO!"+"\n"+hora.toLocaleString());
}
saludar ();

//-CONSULTA PRODUCTOS-
let seleccionarProd = prompt ("Ingresa un producto:\nbanco niza\nmesa londres\nmueble york\nmueble mini york\nmesa zagreb\nmesa panama\nperchero gales\nperchero lyon");
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

//-DESPEDIDA-
function despedir() {
    alert("Gracias por tu compra!!")
}
despedir()    

//MAP-(se pasan a mayúsculas los nombres)
const actualizado = productos.map((prod) => {
    return {
    nombre: prod.nombre.toUpperCase(),
    precio: prod.precio 
    }
})
console.table(actualizado);

//FIND-(se busca el código "m04")
const busqueda = productos.find((prod) => prod.codigo === "m04");
console.log(busqueda);

//FILTER-(se filtran los productos menores a $7000)
const filtroPrecio = productos.filter((prod) => prod.precio < 7000);
console.table(filtroPrecio);




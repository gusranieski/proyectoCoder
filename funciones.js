//DESAFIO COMPLEMENTARIO-ARRAYS-
class Producto {
    constructor(nombre, precio, codigo) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.codigo = codigo;
    this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
   }
   
   const productos = [];
   productos.push(new Producto("banco niza", 11000,"m01"));
   productos.push(new Producto("mesa londres", 15500,"m02"));
   productos.push(new Producto("mueble york", 7850,"m03"));
   productos.push(new Producto("mueble mini york", 5050,"m04"));
   productos.push(new Producto("mesa zagreb", 15600,"m05"));
   productos.push(new Producto("mesa panama", 6800,"m06"));
   productos.push(new Producto("perchero gales", 6300,"m07"));
   productos.push(new Producto("perchero lyon", 4050,"m08"));
   
   for(const prod of productos){
     prod.sumaIva();
    }
    console.log(productos);


//PRIMER DESAFIO-FUNCIONES-
    function saludar() {
    alert("¡Bienvenidos a MUEBLITO!");
}

saludar ();


function calcular()
{
    let producto = prompt ("Ingresa un producto (presiona -t para ver el total)\nbanco niza\nmesa londres\nmueble york\nmueble mini york\nmesa zagreb\nmesa panama\nperchero gales\nperchero lyon");
    let precio=0;
    
while(producto!="t"){
    switch(producto){
        case "banco niza":
            console.log("Banco NIZA $11.000");
            precio=precio+11000;
            break;
        case "mesa londres":
            console.log("Mesa LONDRES $15.500");
            precio=precio+15500;
            break;
        case "mueble york":
            console.log("Mueble YORK $7.850");
            precio=precio+7850;
            break;
        case "mueble mini york":
            console.log("Mueble MINI YORK $5.050");
            precio=precio+5050;
            break;
        case "mesa zagreb":
            console.log("Mesa ZAGREB $15.600");
            precio=precio+15600;
            break;
        case "mesa panama":
            console.log("Mesa PANAMÁ $6.800");
            precio=precio+6800;
            break;
        case "perchero gales":
            console.log("Perchero GALES $6.300");
            precio=precio+6300;
            break;
        case "perchero lyon":
            console.log("Perchero Lyon $4.050");
            precio=precio+4050;
            break;
        default:
            console.log("producto no se encuentra");
            break;
    }
    producto=prompt("Ingresa otro producto (presionar -t para ver el total)\nbanco niza\nmesa londres\nmueble york\nmueble mini york\nmesa zagreb\nmesa panama\nperchero gales\nperchero lyon");
}
console.log("Total a pagar $"+precio);
}

calcular();

function pagar() {
    let metodoDePago= prompt("Ingrese forma de pago \ntarjeta \nmercadopago")
    if (metodoDePago=="tarjeta"){
        alert("Ingrese número de tarjeta")
    }
    else if (metodoDePago=="mercadopago"){
        alert("Ingrese usuario")
    }
    else {
        alert("no paga")
    }
}

pagar()

function despedir() {
    alert("Gracias por tu compra!!")
}

despedir()



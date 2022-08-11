
//VARIABLES PRINCIPALES-
const carrito=[];

//-(se muestran los productos por consola sin IVA)-
console.table(productos);

//DOM-(se crean las cartas en el html)
crearTarjeta();

function crearTarjeta(){
    let cartas = document.getElementById("cartas");
    for(const prod of productos){
        let carta = document.createElement("div");
        carta.className="items col-12 col-md-6 col-lg-3";
        carta.innerHTML+=`<div>
        <img class="img-fluid mt-4" src="../imagenes/todos los productos/${prod.imagen}.jpg" alt="">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button id="btn${prod.codigo}" class="btn btn-warning">Comprar <i class="fa fa-shopping-cart"></i></i></button>
    </div>
        `;
        cartas.append(carta);
    }
}
//EVENTOS-(se agregan eventos al boton comprar y guarda en el carrito)
productos.forEach(prod =>{
    let botonComprar = document.getElementById(`btn${prod.codigo}`);    
    botonComprar.onclick = () => {
        carrito.push(prod);
        console.log("Agregaste a tu carrito:");
        document.getElementById("tablaCarrito").innerHTML+=`
            <tr>
                <td> ${prod.codigo}</td>
                <td> ${prod.nombre}</td>
                <td>$${prod.precio}</td>
            </tr>
        `;
        // prod.sumaIva();
        console.table(carrito);
        //se muestra el total acumulado del carrito
        actualizarCarrito();
    } 
    
    botonComprar.onmouseover = () => {
        botonComprar.className="btn btn-danger";
    }
    
    botonComprar.onmouseout = () => {
        botonComprar.className="btn btn-warning";
    }
})

function actualizarCarrito(){
    const total = carrito.reduce((acc,prod) => acc+prod.precio,0);
    console.log("Total de la suma $"+total)
    localStorage.setItem("carrito",JSON.stringify(carrito));
}







































    
// //-SALUDO-
// function saludar() {
//     let hora=new Date();
//     alert("¡Bienvenidos a MUEBLITO!"+"\n"+hora.toLocaleString());
// }
// saludar ();

// //-CONSULTA PRODUCTOS-
// let seleccionarProd = prompt("Ingresa un producto:\nbanco niza\nmesa londres\nmueble york\nmueble mini york\nmesa zagreb\nmesa panama\nperchero gales\nperchero lyon");
// while(seleccionarProd != "finalizar"){
//     let prodElegido = productos.find((prod) => prod.nombre == seleccionarProd);
//     console.log(prodElegido);
//     if(prodElegido != undefined){
//         carrito.push(prodElegido);
//         alert("Producto agregado");
//         console.table(carrito);
//     }else{
//         alert("Producto no encontrado")
//     }
//     seleccionarProd=prompt("Ingresa otro producto ó (finalizar)")
// }
// //REDUCE-(se suma el total del carrito)
// const total = carrito.reduce((acc,prod) => acc+prod.precio,0);
// alert("Total de la suma $"+total)
// console.log("Total de la suma $"+total)
    

// //MAP-(se pasan a mayúsculas los nombres)
// const actualizado = productos.map((prod) => {
//     return {
//     nombre: prod.nombre.toLowerCase(),
//     precio: prod.precio 
//     }
// })
// console.table(actualizado);

// //FIND-(buscador de productos por código)
// function buscador(){
//     let consultaCodigo=prompt("Ingresa el código del producto para saber si hay stock");
//     const busqueda = productos.find((prod) => prod.codigo === consultaCodigo);
//     if(busqueda != undefined){
//         alert("Hay stock de: "+busqueda.nombre);
//         console.log(busqueda);
//     }else{
//         alert("No hay stock");
//         consultaCodigo = prompt("Ingresa el código del producto");
//     }
// }

// buscador();

// //FILTER-(se filtran los productos menores a precio ingresado)
// function filtrar(){
//     let filtrarBaratos = parseInt(prompt("Ingresa un precio para ver los más baratos"));
//     const filtroPrecio = productos.filter((prod) => prod.precio < filtrarBaratos );
//     console.table(filtroPrecio);
// }

// filtrar();

// //-DESPEDIDA-
// function despedir() {
//     alert("Gracias por tu compra!!")
// }
// despedir()





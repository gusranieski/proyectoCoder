//VARIABLES PRINCIPALES-
let productos=[];
let carrito=[];

class Producto {
    constructor(nombre, precio, codigo, cantidad, imagen) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.codigo = codigo;
    this.cantidad = parseInt(cantidad);
    this.imagen = imagen;
    }
}

const contenedorCarrito = document.getElementById("tablaCarrito");
const contenedorTotalModal = document.getElementById("footer-total");
const botonVaciarCarrito = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("conteo-carrito");
const botonFinalizarCompra = document.getElementById("finalizar-compra");

//STORAGE-cuando se actualiza la página, se carga el carrito abandonado
//OPERADOR LOGICO OR--------------
carrito = JSON.parse(localStorage.getItem('carrito')) || [] 

//FUNCIONES-
crearTarjeta();
actualizarCarrito();

//FETCH- se obtienen los datos del archivo (stock.json) y se insertan en las cartas
function crearTarjeta(){
fetch('/stock.json')
.then((res) => res.json())
.then((productos) => {
    let cartas = document.getElementById("cartas");
    for(const prod of productos){
        let carta = document.createElement("div");
        carta.className="items col-12 col-md-6 col-lg-3";
        carta.innerHTML+=`<div>
        <img class="img-fluid mt-4" src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button id="btn${prod.codigo}" class="btn btn-warning">Comprar <i class="fa fa-shopping-cart"></i></i></button>
    </div>
        `;
        cartas.append(carta);
        //se crean las cartas y por cada "click" al botón "comprar" se agregan los productos al carrito
        let botonComprar = document.getElementById(`btn${prod.codigo}`);    
        botonComprar.onclick = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregaste a tu carrito:'+"\n"+prod.nombre,
            showConfirmButton: false,
            timer: 2500,
            toast : true
          })
            carrito.push(prod);           
            actualizarCarrito()
        }
    }
    //SPREAD OPERATOR-agrego una nueva clave y valor a todos los objetos y se muestra por consola
    const origen = "Argentina";
    const construido = productos.map(productos =>{
    return {...productos, origen};
    });
    console.table(construido) 
})
}

//ELIMINAR PRODUCTOS-
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.codigo === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

//VACIAR TOTAL DEL CARRITO-
botonVaciarCarrito.addEventListener("click", () => {
    if(carrito.length === 0){
        Swal.fire('Todavía no has agregado nada!');
    }else{
        Swal.fire({
            title: 'Se ha vaciado tu carrito!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    carrito.length = 0;
    actualizarCarrito();
})

//ACTUALIZAR CARRITO Y SUMAR EL TOTAL-
function actualizarCarrito(){   
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        let div = document.createElement("tr");
        div.innerHTML+=`
                        <td>${prod.codigo}</td>
                        <td>${prod.nombre}</td>
                        <td>$${prod.precio}</td>
                        <td>${prod.cantidad}</td>
                        <td><button id="eliminar${prod.codigo}" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button></td>
                        `;
                    contenedorCarrito.append(div);
                    //se asigna un botón para eliminar cada producto del carrito
                    const eliminarProducto = document.getElementById(`eliminar${prod.codigo}`);
                    eliminarProducto.addEventListener("click", function(){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: prod.nombre+" "+'eliminado!',
                            showConfirmButton: false,
                            timer: 2500,
                            toast : true
                          })
                    eliminarDelCarrito(prod.codigo)
        }); 
    });         
                //con el método reduce se suma total de todo el carrito
                const total = carrito.reduce((acc,prod) => acc+prod.precio,0);
                //OPERADOR TERNARIO-------------------------
                carrito.length === 0 ? contenedorTotalModal.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`: contenedorTotalModal.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${total}</th>`;
                //se muestra por consola la suma total
                console.log("Total de la suma $"+total);
                contadorCarrito.innerText = carrito.length;
                //se guarda el carrito en el local storage
                localStorage.setItem("carrito",JSON.stringify(carrito));
}

//FINALIZAR COMPRA-al finalizar la compra se vacía el carrito del local storage-
botonFinalizarCompra.addEventListener("click", () =>{
    if(carrito.length === 0){
        Swal.fire('Seleccioná un producto!');
    }else{
        Swal.fire({
            title: 'Compra realizada con éxito!!!',
            text: 'Tu pedido está en proceso...',
            imageUrl: '/imagenes/loogo.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Logo',
          })
    }
    localStorage.removeItem("carrito",JSON.stringify(carrito));
    carrito=[]
    actualizarCarrito()
})
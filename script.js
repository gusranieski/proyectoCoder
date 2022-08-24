//VARIABLES PRINCIPALES-
let carrito=[];

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
agregarAlCarrito();
actualizarCarrito();

//DOM-(se crean las cartas en el html)
function crearTarjeta(){
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
    }
}

//EVENTOS-(se agregan eventos al boton comprar y guarda en el carrito)     
function agregarAlCarrito(){
productos.forEach(prod =>{
    let botonComprar = document.getElementById(`btn${prod.codigo}`);    
    botonComprar.onclick = () => {
            carrito.push(prod);           
            console.table(carrito);
            actualizarCarrito()
        }
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
                    
                    const eliminarProducto = document.getElementById(`eliminar${prod.codigo}`);
                    eliminarProducto.addEventListener("click", function(){
                    eliminarDelCarrito(prod.codigo)
        }); 
    });         
                const total = carrito.reduce((acc,prod) => acc+prod.precio,0);
                //OPERADOR TERNARIO-------------------------
                carrito.length === 0 ? contenedorTotalModal.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`: contenedorTotalModal.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${total}</th>`;
                
                console.log("Total de la suma $"+total);
                contadorCarrito.innerText = carrito.length;
                //se guarda el carrito en el local storage
                localStorage.setItem("carrito",JSON.stringify(carrito));
}

//FINALIZAR COMPRA-al finalizar la compra se vacía el carrito del local storage-
botonFinalizarCompra.addEventListener("click", () =>{
    Swal.fire('Compra realizada con éxito!!!');
    localStorage.removeItem("carrito",JSON.stringify(carrito));
    carrito=[]
    actualizarCarrito()
})

//SPREAD OPERATOR-agrego una nueva clave y valor a todos los objetos
const origen = "Argentina";
const construido = productos.map(productos =>{
    return {...productos, origen};
});
console.table(construido)


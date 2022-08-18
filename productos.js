//-CONSTRUCTOR-
class Producto {
    constructor(nombre, precio, codigo, cantidad, imagen) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.codigo = codigo;
    this.cantidad = parseInt(cantidad);
    this.imagen = imagen;
    }
}
const productos = [
    new Producto("Banco Niza",11000,"m01",1,"../imagenes/todos los productos/banco00.jpg"),
    new Producto("Mesa Londres",15500,"m02",1,"../imagenes/todos los productos/escritorio00.jpg"),
    new Producto("Mueble York",7850,"m03",1,"../imagenes/todos los productos/estanteria00.jpg"),
    new Producto("Mueble Mini york",5050,"m04",1,"../imagenes/todos los productos/estanteria01.jpg"),
    new Producto("Mesa Zagreb",15600,"m05",1,"../imagenes/todos los productos/mesaratona00.jpg"),
    new Producto("Mesa Panama",6800,"m06",1,"../imagenes/todos los productos/mesaratona01.jpg"),
    new Producto("Perchero Gales",6300,"m07",1,"../imagenes/todos los productos/perchero00.jpg"),
    new Producto("Perchero Lyon",4050,"m08",1,"../imagenes/todos los productos/perchero001.jpg"),
];
//últimos productos agregados-
productos.push(new Producto("Banco Napoli",6000,"m09",1,"../imagenes/todos los productos/bancoNapoli.jpg"));
productos.push(new Producto("Estante Seul",3000,"m010",1,"../imagenes/todos los productos/estanteSeul.jpg"));
productos.push(new Producto("Banqueta Tokio",4000,"m011",1,"../imagenes/todos los productos/banquetaTokio.jpg"));
productos.push(new Producto("Mesa Colombia",5500,"m012",1,"../imagenes/todos los productos/mesaColombia.jpg"));
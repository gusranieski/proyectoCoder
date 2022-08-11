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
const productos = [
    new Producto("Banco Niza",11000,"m01",10,"banco00"),
    new Producto("Mesa Londres",15500,"m02",10,"escritorio00"),
    new Producto("Mueble York",7850,"m03",10,"estanteria00"),
    new Producto("Mueble Mini york",5050,"m04",10,"estanteria01"),
    new Producto("Mesa Zagreb",15600,"m05",10,"mesaratona00"),
    new Producto("Mesa Panama",6800,"m06",10,"mesaratona01"),
    new Producto("Perchero Gales",6300,"m07",10,"perchero00"),
    new Producto("Perchero Lyon",4050,"m08",10,"perchero001"),
];

productos.push(new Producto("Barra Desayunadora",45000,"m09",10,"barra desayunadora"));

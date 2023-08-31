alert ("Bienvenido a carniceria el Novillo de Bortti");
// lista productos

class Producto {
  constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
  }}
  const productos = [
    new Producto("costilla", 2200),
    new Producto("vacio", 2100),
    new Producto("milanesa", 1900),
    new Producto("costeleta", 1100)
];

let todoslosProductos = productos.map((producto) => `${producto.nombre} $${producto.precio}`);
alert(todoslosProductos.join(" ; "));

// descuento por pago con billetera 
alert("si paga con billetera Santa fe tiene un 30% de descuento");
function calcularPrecioConDescuento(precio) {
  const descuento = 0.3; 
  return precio * (1 - descuento);
}

// nuevo precio
productos.forEach((item) => {
  const precioConDescuento = calcularPrecioConDescuento(item.precio);
  alert(`${item.nombre} Precio: $${precioConDescuento}`);
});

// sugerencias del cliente

let nombreSugerido = prompt("que nuevo producto te gustaria que agreguemos?")
let precioSugerido = prompt("te gustaria linea economica o premium")
 alert("tendremos en cuenta tu sugerencia de " + nombreSugerido +" "+ precioSugerido)
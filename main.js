alert ("Bienvenido a carniceria el Novillo de Bortti");

const productos = [
    { id: 1, nombre: "costilla", precio: 2200 },
    { id: 2, nombre: "vacio", precio: 2100 },
    { id: 3, nombre: "milanesa", precio: 1900 },
    { id: 4, nombre: "costeleta", precio: 1100 },
];
let todoslosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
alert(todoslosProductos.join(" ; "));

alert("si paga con billetera Santa fe tiene un 30% de descuento");

let preciosActualizados = productos.map(item => {
  let precio_actualizado = item.precio - item.precio * 0.3; 
  return item.nombre+ " Precio: "+ precio_actualizado + "\n";
});

alert(preciosActualizados)

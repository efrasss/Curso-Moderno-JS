const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
// Manera de extraer valores de un objeto antes de ECS2015
// const nombre = producto.nombre;
// console.log(nombre);

// Desructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

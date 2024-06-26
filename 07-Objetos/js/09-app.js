"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
// Solo deja modificar las ya existentes, pero no permite añadir o eliminar las llaves 
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));

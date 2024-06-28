const autenticado = true;
const puedePagar = false;

// console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No, no esta autenticado');

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Autenticado, pero no puede pagar' : 'No, no esta autenticado' );
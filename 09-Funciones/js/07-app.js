iniciarApp();

function iniciarApp() {
    console.log('iniciando app...');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Efrain');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}
// Añadir funciones en un objeto

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando Playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCacncion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    } 
}

reproductor.nuevaCacncion = 'Enter Sadman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy metal');
reproductor.crearPlaylist('Reggaevolucion');
reproductor.reproducirPlaylist('Reggaevolucion');
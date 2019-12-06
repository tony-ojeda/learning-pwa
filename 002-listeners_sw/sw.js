// Ciclo de vida del SW
self.addEventListener('install', event => {
    // descargar assets
    // creamos un cache
    console.log('instalando SW');
});

// cuando el SW toma el control de la apliación
self.addEventListener('activate', event => {
    // borrar cache viejo
    console.log('SW: activo y listo para controlar la app');
});
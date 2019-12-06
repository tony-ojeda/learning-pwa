// Ciclo de vida del SW
self.addEventListener('install', event => {
    // descargar assets
    // creamos un cache
    console.log('instalando SW');

    const instalación = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 5);

    })


    event.waitUntil(instalación);

});

// cuando el SW toma el control de la apliación
self.addEventListener('activate', event => {
    // borrar cache viejo
    console.log('SW2: activo y listo para controlar la app');
});

// FETCH: manejo de peticiones HTTP
self.addEventListener('fetch', event => {
    // apicar estrategias de cache
    // console.log('SW:', event.request.url);

    // if (event.request.url.includes('https://reqres.in/')) {
    //     const resp = new Response(`{ok: false, mensaje: 'jajaja :v'}`);

    //     event.respondWith(resp);
    // }
});

// SYNC: recuperamos la conexion a internet
self.addEventListener('sync', event => {
    console.log('tenemos conexión');
    console.log(event);
    console.log(event.tag);
})
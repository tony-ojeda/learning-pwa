if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
}

if (window.caches) {
    // Aperturar un nuevo BD en cache
    caches.open('prueba-1');
    caches.open('prueba-2');

    // Verificar si existe dato en cache
    caches.has('prueba-2').then(console.log);

    // Eliminar dato en cache
    // caches.delete('prueba-1').then(console.log);

    caches.open('cache-v1.1').then(cache => {
        // almacena datos en cache
        // cache.add('index.html');
        cache.addAll([
            'index.html',
            'css/style.css',
            'img/main.jpg'
        ]).then(() => {
            // cache.delete('css/style.css');

            // actualiza un dato almacenado en cache
            cache.put('index.html', new Response('Hola mundo'));

        });


        // cache.match('index.html')
        //     .then(res => {
        //         res.text().then(console.log);
        //     })


    });

    // muestra las BD creadas
    caches.keys().then(console.log);
}
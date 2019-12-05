self.addEventListener('fetch', event => {
    // if (event.request.url.includes('style.css')) {
    //     let respuesta = new Response(`
    //         body {
    //             background-color: tomato;
    //             color: pink;
    //         }
    //     `, {
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //     });
    //     event.respondWith(respuesta);
    // }

    if (event.request.url.includes('main.jpg')) {
        let resp = fetch('img/main-patas-arriba.jpg');
        event.respondWith(resp);
    }
});
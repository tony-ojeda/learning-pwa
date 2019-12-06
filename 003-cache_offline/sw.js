self.addEventListener('fetch', event => {

    const offlineResponse = new Response(`

        Bienvenido a mi Página Web

        Disculpa,pero para usarla, necesitas internet

    `);



    const offlineResp = fetch('pages/offline.html')

    const resp = fetch(event.request)
        .catch(() => offlineResponse);
    event.respondWith(resp);
});
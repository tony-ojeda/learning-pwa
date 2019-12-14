// Guardar  en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {


    if (res.ok) {

        return caches.open(dynamicCache).then(cache => {

            cache.put(req, res.clone());

            return res.clone();

        });

    } else {
        return res;
    }

}

// Cache with network update
function actualizaCacheStatico(staticCache, req, APP_SHELL_INMUTABLE) {


    if (APP_SHELL_INMUTABLE.includes(req.url)) {
        // No hace falta actualizar el inmutable
        // console.log('existe en inmutable', req.url );

    } else {
        // console.log('actualizando', req.url );
        return fetch(req)
            .then(res => {
                return actualizaCacheDinamico(staticCache, req, res);
            });
    }



}

// Network with cache fallback / update
function manejoApiMensaje(cacheName, req) {

    if (req.clone().method === 'POST') {
        // POSTEO de un nuevo mensaje


        if (self.registration.sync) {
            // .text() extrea la información que contiene el request
            return req.clone().text().then(body => {
                // console.log(body);
                const bodyObj = JSON.parse(body);
                return guardarMensaje(bodyObj);
            });
        } else {
            // tengo que guardar en el indexedDB
            return fetch(req);
        }
    } else {
        return fetch(req)
            .then(res => {
                if (res.ok) {
                    actualizaCacheDinamico(cacheName, req, res.clone())
                    return res.clone();
                } else {
                    return caches.match(req);
                }
            }).catch(err => {
                return caches.match(req);
            });
    }
}

// tareas asincronas
self.addEventListener('sync', e => {
    console.log('SW: Sync');
    if (e.tag === 'nuevo-post') {
        // postear a BD cuando hay conexión
        // e.waintUntil();
    }
});
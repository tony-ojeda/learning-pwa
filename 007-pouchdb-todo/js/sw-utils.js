// Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {
    if (res.ok) {
        // caches.open return promise
        return caches.open(dynamicCache).then(cache => {
            // other promise
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}
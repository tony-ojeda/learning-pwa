// Utilidades para grabar PouchDB
function guardarMensaje(mensaje) {
    mensaje._id = new Date().toISOString();

    db.put(mensaje);
}
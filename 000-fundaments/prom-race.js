function sumarLento(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero + 1), 800)
    });
}

let sumarRapido = numero => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1)
            reject('Error en sumar rápido');
        }, 1000)
    });
}

Promise.race([sumarLento(5), sumarRapido(10)])
    .then(console.log)
function retornaTrue() {
    return true;
}

function sumarLento(numero) {
    return new Promise((resolve, reject) => {
        resolve(numero + 1);
        // reject('Sumar lento fallo');
    }, 800)
}

let sumarRapido = numero => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero + 1), 300)
    })
}

let cosas = [sumarLento(5), sumarRapido(10), true, 'hola mundo', retornaTrue()];

Promise.all(cosas)
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);
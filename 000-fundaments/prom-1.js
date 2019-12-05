function sumarUno(numero, callback) {
    if (numero >= 7) {
        callback('Número muy alto');
        return;
    }

    setTimeout(() => {
        callback(null, numero + 1);
    }, 800)
}

// Infierno de los callbacks
sumarUno(5, (error, nuevoValor) => {
    if (error) {
        console.log(error);
        return;
    }
    sumarUno(nuevoValor, (error, nuevoValor2) => {
        if (error) {
            console.log(error);
            return;
        }
        sumarUno(nuevoValor2, (error, nuevoValor3) => {
            if (error) {
                console.log(error);
                return;
            }
        })
    })
});
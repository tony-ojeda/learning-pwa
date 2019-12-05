// petición POST
// https:reqres.in/api/users

let usuario = {
    nombre: 'Tony',
    edad: 23
};

fetch('https:reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(usuario), // data
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.error);  
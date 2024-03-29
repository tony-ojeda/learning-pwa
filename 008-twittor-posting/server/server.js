const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Directorio Público
app.use(express.static(publicPath));

// Rutas 
const routes = require('./routes');
app.use('/api', routes);



app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
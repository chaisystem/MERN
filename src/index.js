const express = require('express'); // obtengo express
const app = express(); // lo guardo en un objeto

app.listen(3000, () => {
    console.log('server on port 3000');
});
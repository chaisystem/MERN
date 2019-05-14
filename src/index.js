const express = require('express'); // obtengo express
const app = express(); // lo guardo en un objeto


// Setings
app.set('port', process.env.PORT || 3000); // se define el puerto por default o 3000

// Middlewares


// Routes

// Static files


// Start servidor
app.listen(app.get('port'), () => {  // app.get('port') <- se obtiene el valor
    //console.log('server on port ',app.get('port'));
    console.log(`Server on port ${app.get('port')}`); // se remplaza sintanxis
});
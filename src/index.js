const express = require('express'); // obtengo express
const morgan = require('morgan'); // obtengo morgan
const app = express(); // lo guardo en un objeto


// Setings
app.set('port', process.env.PORT || 3000); // se define el puerto por default o 3000

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // comprueba si el dato es un formato json


// Routes
app.use('/api/tasks' ,require('./routes/task.routes'));

// Static files


// Start servidor
app.listen(app.get('port'), () => {  // app.get('port') <- se obtiene el valor
    //console.log('server on port ',app.get('port'));
    console.log(`Server on port ${app.get('port')}`); // se remplaza sintanxis
});
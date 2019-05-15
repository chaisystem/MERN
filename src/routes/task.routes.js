const express = require('express');
const router = express.Router();

const Task =require('../models/task');

// router.get('/', (req, res) =>{
//     Task.find(function (err, tasks){
//         console.log(tasks);
//     })
//     res.json({
//         status: 'API Word'
//     });
// });  // manera normal

/// new manera await

router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});

 router.post('/', async (req, res) =>{ // async esperando un await
    const { title, description} = req.body;
    const task = new Task({title,description});
    await task.save(); // awiat nos sirve para que se ejecute la instuccion y despues continue con la siguiente linea, en este caso guardar la tarea
    res.json({ status: 'task saved'});
});

router.put('/:id', async (req, res) =>{
    const {title, description} = req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id, newTask); // obtenemos el id y segundo paramentro los datos ... await esperamos que termine
    console.log(req.params.id);
    res.json('task updated');
});

router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndDelete(req.params.id); 
    res.json('task deleted');
});


module.exports = router;
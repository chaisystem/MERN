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

module.exports = router;
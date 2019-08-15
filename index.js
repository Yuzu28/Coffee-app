// const http = require('http');
//replace http with express
const express = require('express');
const Coffee = require('./models/coffee');

const app = express();
// const hostname = 'localhost';
const port = 3000;

// const server = http.createServer(async (req,res) => {

app.get('/coffee/:id',(req, res) => {       
     
    console.log('Please Work  ')
    const integer = parseInt(req.params.id);
    console.log(integer);
    const stuff= Coffee.getById(integer);
    stuff
        .then((data) => {
                    console.log('The stuff:');
                    console.log(data);
                    // res.end(JSON.stringify(data));
                    res.json(data);
                })
    console.log(stuff);
    // res.end(allTodos);

});

// app.get('/coffee/:taskId',(req, res) => {       
     
//         console.log("Coffee Please Work lol");
//         console.log(req.params.taskId);
    
       
//         const theId = parseInt(req.params.taskId,10);
//         const aCoffee = todo.getOne(req.params.taskId);
//         aCoffee.then((data) => {
//             res.json(data);
//         })
//         // res.send('You requested to see a profile with the id of ' + req.params.taskId)
//     });
    

 app.listen(port);


// server.listen(port, hostname, () => {
//     console.log(`Server is running on ${port}${hostname}`);
// })










// original data 

// const http = require('http');
// const Coffee = require('../models/coffee');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer(async (req,res) => {
//     console.log(req.url);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     if (req.url === '/acoffee'){
//         const oneCoffee = await Coffee.getById(3);
//         const oneCoffeeJson = JSON.stringify(oneCoffee);
//         res.end(oneCoffeeJson);
//     } else{
//         res.end(`{
//             message: "thank bro"
//         }`)
//     }


// })

// server.listen(port, hostname, () => {
//     console.log(`Server is running on ${port}${hostname}`);
// })
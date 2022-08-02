const express = require("express");
const app = express();
var fs = require('fs');
const Pool = require('pg').Pool

// Create database connection

const pool = new Pool({
  user: 'kikerodriguezvela',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
})


// Check if the database is connected

pool.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});


app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});

app.use(express.json());

app.get('/', function(request, response){
 response.send({
        api: 'Server is running',
    }) 
});

app.post('/sensores', function(request, response){
    console.log(".............................................");
    console.log("Recieved a post request");
    console.log("request.body: ", request.body);        // your JSON
    response.send(request.body);                        // echo the result back
    console.log(".............................................");
});


// Create a new post endpoint to save a new sensor in the database
app.post('/sensores-database', function(request, response){
    const { dispositivo, tiempo, temperatura, humedad } = request.body;

    pool.query('INSERT INTO sensores (dispositivo, tiempo, temperatura, humedad) VALUES ($1, $2, $3, $4)', [dispositivo, tiempo, temperatura, humedad], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Sensor added with ID: ${results.insertId}`)
    })
})


app.get('/sensores-database', function(request, response){
    pool.query('SELECT * FROM sensores', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
})



app.listen(3000, () => {
    console.log("Listen on the port 3000...");
}); 
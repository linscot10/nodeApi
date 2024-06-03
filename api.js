const express = require('express');
const mongoose = require('mongoose');
const Products = require('./models/products.model');
const app = express();
const productRoute = './routes/products.route.js'

const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('hello world');
});

//Database Connection
mongoose.connect('uri')
    .then(() => {
        console.log("connected to database");
        app.listen(port, (res) => {
            console.log(`lstening to localhost:${port}`);
        })

    })
    .catch((error => {
        console.error(error)
    }))

// app.get('/profile/course/:year/:day', (req, res) => {
//     res.send(req.params)
// })




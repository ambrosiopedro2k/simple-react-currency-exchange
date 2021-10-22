const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(express.static('public'))
app.use('/scripts', express.static(__dirname +'/node_modules/'))

app.get('/', (req, res) => {
    res.render("index.html");
})

app.listen(8090, function () {
    console.log(`Server Running at port 8090`);
})


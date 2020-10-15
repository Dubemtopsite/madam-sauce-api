const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
    res.send('Paulex alex');
})



const server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
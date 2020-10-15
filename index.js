const express = require('express');
var bodyParser = require('body-parser');
var food = require('./routes/admin/food');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    //res.send(food.foodClass.printOutFoods());
})

app.get('/admin/food', async (req, res) => {
    var outputData = await food.foodClass.printOutFoods();
    res.send(outputData);
})
app.get('/admin/food/:id', async (req, res) => {
    var outputData = await food.foodClass.getFoodItemById(req.params.id);
    res.send(outputData);
})
app.post('/admin/food', (req, res) => {
    res.send(food.foodClass.saveFood(req.body));
})
app.put('/admin/food/:id', async (req, res) => {
    res.send(await food.foodClass.updateFood( req.params.id, req.body));
})



const server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
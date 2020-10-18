const express = require('express');
var bodyParser = require('body-parser');
var food = require('./routes/admin/food');
var order = require('./routes/order');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('/menu');
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
    res.json(await food.foodClass.updateFood( req.params.id, req.body));
})
app.delete('/admin/food/:id', async (req, res) => {
    res.json(await food.foodClass.deleteFood( req.params.id));
})
app.get('/admin/orders', async (req, res) => {
    var outputData = await order.orderClass.getAllOrder();
    res.json(outputData);
})
app.get('/menu', async (req, res) => {
    res.json(await order.orderClass.getFoodMenu());
})
app.post('/place_order', async (req, res) => {
    res.json(await order.orderClass.placeOrder(req.body));
})



const server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
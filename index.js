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
    res.json(outputData);
})
app.get('/admin/food/:id', async (req, res) => {
    var outputData = await food.foodClass.getFoodItemById(req.params.id);
    res.json(outputData);
})
app.post('/admin/food', (req, res) => {
    res.json(food.foodClass.saveFood(req.body));
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
app.get('/admin/orders/:id', async (req, res) => {
    var outputData = await order.orderClass.getOrderById(req.params.id);
    res.json(outputData);
})
app.get('/admin/approve_order/:id', async (req, res) => {
    res.json(await order.orderClass.changeOrderStatus(req.params.id));
})
app.get('/menu', async (req, res) => {
    res.json(await order.orderClass.getFoodMenu());
})
app.post('/place_order', async (req, res) => {
    res.json(await order.orderClass.placeOrder(req.body));
})
app.get('/order/:id', async (req, res) => {
    var outputData = await order.orderClass.getOrderById(req.params.id);
    res.json(outputData);
})



const server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
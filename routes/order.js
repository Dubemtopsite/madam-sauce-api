const db = require('./../dbConn');

function OrderClass(){
    this.getAllOrder = async () => {
        var returnData = await db.dbOP.getItemWhere('orderCollection', {order_status: '0'});
        console.log(returnData);
        if(returnData){
            if(returnData.length === 0){
                return 'No order avaiable for now';
            }
            return returnData;
        }else{
            return 'No order avaiable menu for now';
        }
    }

    this.getFoodMenu = async () => {
        var returnData = await db.dbOP.getItemWhere('foodCollection', {available: '1'});
        if(returnData){
            return returnData;
        }else{
            return 'No food avaiable menu for now';
        }
    }

    this.placeOrder = async (orderArray) => {
        if(this.validateInput(orderArray)){
            var returnData = await db.dbOP.getItemById('foodCollection',  orderArray.food_id);
            if(returnData){
                const orderObject = {
                    item_id: Date.now(),
                    customer_name: orderArray.name,
                    customer_phone: orderArray.phone,
                    food_id: orderArray.food_id,
                    food_name: returnData.name,
                    delivery_location: orderArray.location,
                    order_date: new Date(),
                    order_status: '0'
                }
                if(db.dbOP.saveItem('orderCollection', orderObject)){
                    return 'Order Placed';
                }else{
                    return 'An error occured please try again';
                }
            }else{
                return 'No food with the provided id found on the menu';
            }
        }else{
            return 'Please provide the necessary input needed';
        }
    }

    this.validateInput = (orderArray) => {
        var customer_name = typeof(orderArray.name) === 'string' && orderArray.name.trim().length > 0 ? orderArray.name : false;
        var customer_phone = typeof(orderArray.phone) === 'string' && orderArray.phone.trim().length > 0 ? orderArray.phone : false;
        var delivery_location = typeof(orderArray.location) === 'string' && orderArray.location.trim().length > 0 ? orderArray.location : false;
        if(customer_name && customer_phone && delivery_location){
            return true;
        }else{
            return false;
        }
    }
}

const orderClass = new OrderClass()
exports.orderClass = orderClass;
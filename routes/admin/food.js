const db = require('./../../dbConn');

function FoodClass(){

    this.printOutFoods = async () => {
        var returnData = await db.dbOP.getItemList('foodCollection');
        if(returnData){
            return returnData;
        }else{
            return 'No Food Found. Please add foods to your menu';
        }
    }

    this.getFoodItemById = async (foodId) => {
        var returnData = await db.dbOP.getItemById('foodCollection', {item_id: parseInt(foodId)});
        if(returnData){
            return returnData;
        }else{
            return 'No Food with id found on the menu'; 
        }
    }

    this.saveFood = (foodArray) => {
        this.validateInput(foodArray);
        if(this.validateInput(foodArray)){
            const foodObject = {
                item_id: Date.now(),
                name: foodArray.name,
                price: foodArray.price,
                description: foodArray.description,
                available: foodArray.available
            }
            if(db.dbOP.saveItem('foodCollection', foodObject)){
                return 'Food added to menu';
            }else{
                return 'An error occured please try again';
            }
        }else{
            return 'Please provide the necessary input needed';
        }
       // console.log(typeof(foodArray.price));
    }

    this.validateInput = (foodArray) => {
        var name = typeof(foodArray.name) === 'string' && foodArray.name.trim().length > 0 ? foodArray.name : false;
        var price = typeof(foodArray.price) === 'string' && !isNaN(parseInt(foodArray.price)) ? foodArray.price : false;
        var description = typeof(foodArray.description) === 'string' && foodArray.description.trim().length > 0 ? foodArray.description : false;
        var available = typeof(foodArray.available) === 'string' && !isNaN(parseInt(foodArray.available)) ? foodArray.available : false;
        if(name && price && description && available){
            return true;
        }else{
            return false;
        }
    }

    this.updateFood = async (foodId, foodArray) => {
        const foodObject = {
            name : typeof(foodArray.name) === 'string' && foodArray.name.trim().length > 0 ? foodArray.name : false,
            price : typeof(foodArray.price) === 'string' && !isNaN(parseInt(foodArray.price)) ? foodArray.price : false,
            description : typeof(foodArray.description) === 'string' && foodArray.description.trim().length > 0 ? foodArray.description : false,
            available : typeof(foodArray.available) === 'string' && !isNaN(parseInt(foodArray.available)) ? foodArray.available : false
        }
        var foodFieldArray = ['name', 'price', 'description', 'available'];
        var foodUpdateObject = {};
        for(let row of foodFieldArray){
            if(foodObject[row]){
                foodUpdateObject[row] = foodObject[row];
            }
        }
        if(await db.dbOP.updateItem('foodCollection',{item_id: parseInt(foodId)}, foodUpdateObject)){
            return {
                status: 200,
                message: 'Food updated',
                update_id: foodId
            }
        }else{
            return {
                status: 200,
                message: 'Item do not exist in the food menu'
            }
        }
    }

    this.deleteFood = async (foodId) => {
        if(await db.dbOP.deleteItem('foodCollection', {item_id: parseInt(foodId)})){
            return {
                status: 200,
                message: 'Food deleted with id #'+ foodId +' from menu',
            }
        }else{
            return {
                status: 500,
                message: 'An error occured while deleting'
            }
        }
    }
}

const foodClass = new FoodClass();
exports.foodClass = foodClass;
# App name: Madam sauces's mama put

# App description: 
This API is built so as to enable madam sauces who have a mama put to be able to reach out to her customer anytime instead of them walking down to her shop to make order for meal and also for her to be able to showcase her meal for the day receive order from customer and then delivery the meal to them.

# Author name: Owoh chidubem alexander

# Author email(primary email): chidubempaul91@gmail.com

# Author email(secondary email): chidubem.owoh.g20@gmail.com

# App version: 1.0.0

# Number of API endpoint(s): 12 endpoints

# SITE_URL : "http://www.domain_name"

# List of the API endpoints and the required parameters for the body

# 1.    Homepage
        This page will redirect the user to {{SITE_URL}}/menu 
#       Parameter list:
        No parameter required

# 2.    Food
        This route manage everything about adding, editing, viewing and deleting food from the database
# 2a.   Fetch all food on the database
        Link: {{SITE_URL}}/admin/food
        Request type: GET
        Parameters: None
# 2b.   Fetch food by id
        Link: {{SITE_URL}}/admin/food/:id
        Request type: GET
        Parameters: None
# 2c.   Add new food
        Link: {{SITE_URL}}/admin/food/
        Request type: POST
        POST encoding: x-www-form-urlencoded
        Post Parameters: {
            name: '',
            price: '',
            description: '',
            available: ''
        }
# 2d.   Fetch food by id
        Link: {{SITE_URL}}/admin/food/:id
        Request type: PUT
        PUT encoding: x-www-form-urlencoded
        PUT Parameters: {
            name: '',
            price: '',
            description: '',
            available: ''
        }
        Parameter optional but atleast will need one parameter
# 2b.   Delete food by id
        Link: {{SITE_URL}}/admin/food/:id
        Request type: DELETE
        Parameters: None


# 3.    Orders
        This route manage everything about viewing and updating orders from customer
# 3a.   Fetch all order with order_status = 0 on the database
        Link: {{SITE_URL}}/admin/orders
        Request type: GET
        Parameters: None
# 2b.   Fetch order by id
        Link: {{SITE_URL}}/admin/orders/:id
        Request type: GET
        Parameters: None
# 2c.   Mark order as successful by id
        Link: {{SITE_URL}}/admin/approve_order/:id
        Request type: GET
        Parameters: None

# 4.    Food
        This route manage everything about placing order, viewing order and viewing all food on the food menu
# 4a.   Fetch all food menu on the database
        Link: {{SITE_URL}}/menu
        Request type: GET
        Parameters: None
# 4b.   Fetch order by id
        Link: {{SITE_URL}}/order/:id
        Request type: GET
        Parameters: None
# 4c.   Place new order
        Link: {{SITE_URL}}/place_order
        Request type: POST
        POST encoding: x-www-form-urlencoded
        Post Parameters: {
            name: '',
            phone: '',
            food_id: '',
            location: ''
        }








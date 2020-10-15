const MongoClient = require('mongodb').MongoClient
var db = '';
MongoClient.connect('mongodb://127.0.0.1:27017/orderDB', (err, client) => {
    if(err) return
    console.log(err)
    console.log('Connected to database')

    db = client.db('orderDB');

    
})

function DataBaseOP(){
    this.getFoodList = (collectionName) => {
        return db.collection(collectionName).find().toArray((err, result) => {
            if(err) throw err
            //console.log('database find');
            return result;
        })
    }

    this.saveItem = (collectionName, saveItem) => {
        var queryCollection = db.collection(collectionName);
        return queryCollection.insertOne(saveItem)
            .then( result => {
                console.log(result.insertedId);
                return true;
            })
            .catch(err => {
                console.error('Failed to save')
                return false;
            })
                
    }
}

const dataBaseOp = new DataBaseOP();
exports.dbOP = dataBaseOp;
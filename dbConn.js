const MongoClient = require('mongodb').MongoClient
var db = '';
MongoClient.connect('mongodb://127.0.0.1:27017/orderDB', (err, client) => {
    if(err) return
    console.log(err)
    console.log('Connected to database')
    db = client.db('orderDB');
})

function DataBaseOP(){
    this.getItemList = (collectionName) => {
        return db.collection(collectionName).find().toArray()
            .then( results => {
                return results;
            })
            .catch( err => {
                return false;
            })
    }

    this.getItemById = (collectionName, queryObject) => {
        var queryCollection = db.collection(collectionName);
        return queryCollection.findOne(queryObject)
            .then( result => {
                return result;
            })
            .catch( err => {
                return false;
            })
    }

    this.getItemWhere = (collectionName, queryObject) => {
        return db.collection(collectionName).find(queryObject).toArray()
            .then( results => {
                return results;
            })
            .catch( err => {
                return false;
            })
    }

    this.saveItem = (collectionName, saveItem) => {
        var queryCollection = db.collection(collectionName);
        return queryCollection.insertOne(saveItem)
            .then( result => {
                return true;
            })
            .catch(err => {
                return false;
            })
                
    }

    this.updateItem = (collectionName, updateQuery, updateObject) => {
        var queryCollection = db.collection(collectionName);
        return queryCollection.findOneAndUpdate(
            updateQuery, 
            {
                $set : updateObject
            }
        )
        .then( result => {
            if(!result.value){
                return false;
            }else{
                return true;
            }
        })
        .catch( err => {
            return false;
        })
    }

    this.deleteItem = (collectionName, queryObject) => {
        var queryCollection = db.collection(collectionName);
        return queryCollection.deleteOne(
            queryObject
        )
        then( result => {
            return true;
        })
        .catch( err => {
            return false;
        })
    }
}

const dataBaseOp = new DataBaseOP();
exports.dbOP = dataBaseOp;
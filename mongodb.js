const {ObjectID, MongoClient} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)

    db.collection('users').findOne({'name': 'John'}, (error, user) => {
        if (error) {
            return console.log('Unable to fetch data')
        }
        console.log(user)
    })  
})


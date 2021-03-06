const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mongotest', (err, client)=>{
    console.log('Connected to MongoDB!');
    const db= client.db('mongotest');
    const collection = db.collection('testing')
        collection.insert({'title': 'Snowcrash'}, (err, docs)=>{
        console.log(`${docs.ops.length} records inserted.`);
        console.log(`${docs.ops[0]._id} - ${docs.ops[0].title}`);
        collection.findOne({title: 'Snowcrash'}, (err, doc)=>{
              console.log(`${doc._id} - ${doc.title}`);
              client.close();
          });
      });
  });

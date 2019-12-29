const e = require("express");

if(process.envNODE_ENV === 'production') {
  module.exports = { mongoURI = 'mongodb+srv://drnfx25:<password>@vidjot-prod-9eiig.mongodb.net/test?retryWrites=true&w=majority'}
}else {
  module.exports = {mongoURI = 'mongodb://localhost/vidjot-dev'}
}



// 
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://drnfx25:<password>@vidjot-prod-9eiig.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');

// uri = "mongodb+srv://pankajsangle15:Bhausaheb@123@pankajtodo.nnikhan.mongodb.net/"
// uri = "mongodb+srv://pankajsangle15:Bhausaheb@123@pankajtodo.nnikhan.mongodb.net/PankajTodo?retryWrites=true&w=majority"
// const uri = "mongodb+srv://pankajsangle15:Bhausaheb@123@pankajtodo.nnikhan.mongodb.net/PankajTodo?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/TodoLocalDB";


const connectDB = () =>{
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;


// snippet below


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://pankajsangle15:Bhausaheb@123@pankajtodo.nnikhan.mongodb.net/PankajTodo?retryWrites=true&w=majority"

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);





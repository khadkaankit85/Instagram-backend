// import { MongoClient, ServerApiVersion } from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config({ path: '.env' });


// const uri = process.env.MONGO_DB_URI
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();

//         // Specifying the database name here
//         const database = client.db('Instagram'); // Replace with your database name
//         const usersCollection = database.collection('Users');


//         const cursor = usersCollection.find({ username: "ankit" });
//         const result = await cursor.toArray()
//         console.log(result)


//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

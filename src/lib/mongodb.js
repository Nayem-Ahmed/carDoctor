const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
let db;
export const mongodb = async () => {
    if (db) return db; // Return the cached database connection if it exists
    try {
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();  // Ensure the client is connected
        db = client.db("car-doctor");
        return db;

    } catch (error) {
        console.error(error)

    }


}
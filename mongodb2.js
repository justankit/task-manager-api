const { MongoClient } = require("mongodb");

// MongoDB URI (default is localhost:27017)
const uri = "mongodb://localhost:27017";

// Database and collection name
const dbName = "mydatabase";
const collectionName = "users";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    // Access the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Create a document to insert
    const newUser = {
      name: "John Doe",
      age: 30,
    };

    // Insert the document into the collection
    const result = await collection.insertOne(newUser);
    console.log("User inserted successfully!", result);
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

run();

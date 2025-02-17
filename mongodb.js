const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "task-manager";
const collectionName = "users";

// const id = new ObjectId();
// console.log({ id });
// console.log(id.getTimestamp());

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    const taskCollection = db.collection("tasks");
    // const newUser = {
    //   name: "Ankit",
    //   age: 31,
    // };
    // const result = await collection.insertOne(newUser);

    // const result = await collection.insertMany([
    //   {
    //     name: "Ankit",
    //     age: 31,
    //   },
    //   {
    //     name: "Raj",
    //     age: 27,
    //   },
    // ]);

    // const result = await taskCollection.insertMany([
    //   {
    //     description: "Clean the  house",
    //     completed: true,
    //   },
    //   {
    //     description: "Renew Inspection",
    //     completed: true,
    //   },
    //   {
    //     description: "Pot Plants",
    //     completed: false,
    //   },
    // ]);

    // const user = await collection.findOne({ name: "Ankit" });

    // const users = await collection.find({ age: 32 }).toArray();
    // const users = await collection.find().toArray();
    // const inCTasks = await taskCollection.find({ completed: true }).toArray();
    // console.log("inCTasks", inCTasks);
    // console.log("users", users);
    // console.log("user", user);
    // console.log("result", result);

    //Update one
    // try {
    //   const updateOneResult = await collection.updateOne(
    //     {
    //       _id: new ObjectId("67a47624388d8aa34cde0802"),
    //     },
    //     {
    //       $set: { age: 31 },
    //     }
    //   );
    //   console.log("updateOneResult", updateOneResult);
    // } catch (error) {
    //   console.log("update one error", error);
    // }

    // const updateManyResult = await taskCollection.updateMany(
    //   {
    //     completed: true,
    //   },
    //   {
    //     $set: { completed: false },
    //   }
    // );
    // console.log("updateManyResult", updateManyResult);

    // const userResult = await collection.deleteMany({
    //   age: 27,
    // });
    // console.log("userResult", userResult);

    // Delete One
    const deleteOneResult = await taskCollection.deleteOne({
      description: "Clean the  house",
    });
    console.log("deleteOneResult", deleteOneResult);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

run();

// MongoDBClient.connect(url, function (err, client) {
//   console.log("Connected ");
//   if (err) {
//     return console.log("Unable to connect to database");
//   }

//   const db = client.db(databaseName);
//   db.collection("users").insertOne({
//     name: "Ankit",
//     age: 27,
//   });

//   console.log("Connected ");
// });

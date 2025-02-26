const mongoose = require("mongoose");
const validator = require("validator");
const url = process.env.MONGODB_URL;

mongoose.connect(url);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected.");
});

// const me = new User({
//   name: "Ankit",
//   age: 27,
//   email: "ankitt@mail.com",
//   password: "qwert",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// (async function run() {
//   try {
//     await me.save();
//     console.log("me", me);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// const Task = mongooose.model("Task", {
//   description: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Task({
//   description: "Learn the mongoose library",
//   // completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log("task", task);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

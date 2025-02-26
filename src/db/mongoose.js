const mongooose = require("mongoose");
const validator = require("validator");
const url = process.env.MONGODB_URL;

mongooose.connect(url);

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

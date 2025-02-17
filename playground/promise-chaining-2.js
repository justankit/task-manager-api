require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("67a5e53719d5abd4c8df132e")
//   .then((task) => {
//     console.log("task", task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => {
//     console.log("count", count);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  console.log("task", task);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("67a5f515ad4d62ca21ea0c30")
  .then((count) => console.log("count", count))
  .catch((error) => console.log("error", error));

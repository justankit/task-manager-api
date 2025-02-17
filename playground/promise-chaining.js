require("../src/db/mongoose");

const User = require("../src/models/user");

User.findByIdAndUpdate("67a5cf35921ff82d710496dd", { age: 27 })
  .then((user) => {
    console.log("user", user);
    return User.countDocuments({ age: 27 });
  })
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("error", error);
  });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("67a5cf35921ff82d710496dd", 28).then((count) => {
  console.log("count", count);
});

const express = require("express");
require("./db/mongoose");

const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server connected");
});

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Set a fallback random number generator
bcrypt.setRandomFallback((len) => {
  const buf = Buffer.alloc(len);
  return buf.toString("hex");
});

const myfunction = async () => {
  // const salt = await bcrypt.genSalt(10);
  // const password = "Red!1234";
  // const hashPassword = await bcrypt.hash(password, salt);
  // console.log("password", password);
  // console.log("hashPassword", JSON.stringify(hashPassword));
  // const isMatch = await bcrypt.compare(password, hashPassword);
  // console.log("Password match:", isMatch);

  const token = jwt.sign({ _id: "abc123" }, "thisisnodecourse", {
    expiresIn: "7 days",
  });
  console.log("token", token);

  const data = jwt.verify(token, "thisisnodecourse");
  console.log("data", data);
};

myfunction();

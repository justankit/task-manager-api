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

// Set a fallback random number generator
bcrypt.setRandomFallback((len) => {
  const buf = Buffer.alloc(len);
  return buf.toString("hex");
});

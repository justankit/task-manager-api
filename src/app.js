const express = require("express");
const bcrypt = require("bcryptjs");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Set a fallback random number generator
bcrypt.setRandomFallback((len) => {
  const buf = Buffer.alloc(len);
  return buf.toString("hex");
});

module.exports = app;

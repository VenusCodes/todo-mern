const express = require("express");
const app = express();

const {logger} = require("./middleware/logger.middleware");
const {errorHandler} = require("./middleware/error.middleware");

const authRoutes = require("./routes/auth.route");
const todoRoutes = require("./routes/todo.route");

app.use(express.json());
app.use(logger);

app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.use(errorHandler);

module.exports = app;

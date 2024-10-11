const mongoose = require("mongoose");
const dotenv = reequire("dotenv");
const bodyparser = require("body-parser");
const express = require("express");
const postRoutes = require();

const app = express();

// for the middleware we use bodyparser
app.use(bodyparser.json());

// call the route

app.post("/api/posts", postRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection err:", error);
  });

const mongoose = require("mongoose");
const dotenv = reequire("dotenv");
const bodyparser = require("body-parser");
const express = require("express");
const postRoutes = require('./routes/PostRoute');

const app = express();
dotenv.config();

// for the middleware we use bodyparser
app.use(bodyparser.json());

// call the route

app.use("/api/posts", postRoutes);

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

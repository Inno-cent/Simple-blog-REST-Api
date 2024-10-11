const POST = require("../models/Post");

exports.newBlog = async (req, res) => {
  const { title, author, content } = req.body;

  try {
    const newPost = new POST({ title, author, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.log("message :", err);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const posts = await POST.find();
    res.status(201).json(posts);
  } catch (err) {
    console.error("Error message :", err);
  }
};

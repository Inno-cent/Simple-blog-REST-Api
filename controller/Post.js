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

// Updating all post
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await POST.find();
    res.status(201).json(blogs);
  } catch (err) {
    console.error("Error message :", err);
  }
};

// getting a post by ID controller
exports.getBlogById = async (req, res) => {
  try {
    const Blog = await POST.findById(req.params.id);
    res.status(201).json(Blog);
  } catch (err) {
    console.error("Error message :", err);
  }
};

// Updating a post by ID controller
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true }
    );
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = POST.findByIdAndDelete(req.params.id);
    if (!deletedPost)
      return res.status(401).json({ message: "Post not found" });
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

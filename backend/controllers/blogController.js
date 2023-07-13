// getAllBlogs,
//   getBlogs,
//   getBlog,
//   createBlog,
//   deleteBlog,
//   updateBlog,

const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

//get all public blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createAt: -1 });

  const publicBlogs = blogs.filter((blog) => blog.isPublic != false);

  res.status(200).json(publicBlogs);
};

//get all personal blogs
const getBlogs = async (req, res) => {
  const user_id = req.user._id;

  const blogs = await Blog.find({ user_id }).sort({ createAt: -1 });

  res.status(200).json(blogs);
};

//get single blog
const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No such blog" });
  }

  res.status(200).json(blog);
};

//create a new blog
const createBlog = async (req, res) => {
  const { title, content, isPublic } = req.body;

  let emptyfields = [];

  if (!title) {
    emptyfields.push("title");
  }
  if (!content) {
    emptyfields.push("content");
  }
  if (!isPublic) {
    emptyfields.push("isPublic");
  }
  if (emptyfields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyfields });
  }

  try {
    const user_id = req.user._id;
    const blog = await Blog.create({
      title,
      content,
      isPublic,
      user_id,
    });
    res.status(200).json(blog);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

//delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such blog" });
  }

  const blog = await Blog.findByIdAndDelete({ _id: id });

  if (!blog) {
    return res.status(400).json({ error: "No such blog" });
  }

  res.status(200).json(blog);
};

//update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.isValid(id)) {
    return res.status(404).json({ error: "No such a blog" });
  }

  const blog = await Blog.findByIdAndUpdate(
    {
      _id: id,
    },
    { ...req.body }
  );

  if (!blog) {
    return res.status(400).json({ error: "No such a blog" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getAllBlogs,
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};

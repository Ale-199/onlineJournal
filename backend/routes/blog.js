const express = require("express");
const {
  getAllBlogs,
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  getPublicBlog,
} = require("../controllers/blogController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/publicBlogs", getAllBlogs);

router.get("/publicBlog/:id", getPublicBlog);

router.use(requireAuth);

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlog);

router.delete("/:id", deleteBlog);

router.patch("/:id", updateBlog);

module.exports = router;

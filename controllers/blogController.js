import Blog from "../models/blogModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// Create a new blog post
const createBlog = asyncHandler(async (req, res) => {
  const { title, image, description } = req.body;

  if (!title || !image || !description) {
    return res.status(400).json({ error: "Title, image, and description are required" });
  }

  const blog = await Blog.create({ title, image, description });
  res.status(201).json(blog);
});

// Update an existing blog post
const updateBlog = asyncHandler(async (req, res) => {
  const { title, image, description } = req.body;
  const { blogId } = req.params;

  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).json({ error: "Blog post not found" });
  }

  if (title) blog.title = title;
  if (image) blog.image = image;
  if (description) blog.description = description;

  const updatedBlog = await blog.save();
  res.json(updatedBlog);
});

// Remove a blog post
const removeBlog = asyncHandler(async (req, res) => {
  const removed = await Blog.findByIdAndRemove(req.params.blogId);
  if (!removed) return res.status(404).json({ error: "Blog post not found" });
  res.json({ message: "Blog post removed successfully", removed });
});

// List all blog posts
const listBlogs = asyncHandler(async (req, res) => {
  const allBlogs = await Blog.find({});
  res.json(allBlogs);
});

// Read a single blog post by ID
const readBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId);
  if (!blog) return res.status(404).json({ error: "Blog post not found" });
  res.json(blog);
});

export {
  createBlog,
  updateBlog,
  removeBlog,
  listBlogs,
  readBlog,
};

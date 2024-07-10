import mongoose from "mongoose";

// Define blogSchema
const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

// Create Blog model
const Blog = mongoose.model("Blog", blogSchema);

// Export Blog model
export default Blog;

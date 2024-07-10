import express from "express";
const router = express.Router();
import {
  createBlog,
  updateBlog,
  removeBlog,
  listBlogs,
  readBlog,
} from "../controllers/blogController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/").get(listBlogs);

router.route("/:blogId").get(readBlog);

router.route("/").post(authenticate, authorizeAdmin, createBlog);


router.route("/:blogId").put(authenticate, authorizeAdmin, updateBlog);

router.route("/:blogId").delete(authenticate, authorizeAdmin, removeBlog);

export default router;

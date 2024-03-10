import { Router } from "express";
import { createPosts, getAllPost, updatePost, deletePost } from "../controllers/posts.controller.js"

const router = Router()

router.post('/posts', createPosts);
router.get('/posts', getAllPost);
router.get('/posts/:id');
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router
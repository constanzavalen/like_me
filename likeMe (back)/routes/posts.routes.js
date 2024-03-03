import { Router } from "express";
import {createPosts, getAllPost} from "../controllers/posts.controller.js"

const router = Router()

router.post('/posts', createPosts);
router.get('/posts', getAllPost);
router.get('/posts/:id');

export default router
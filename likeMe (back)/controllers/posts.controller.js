import {createPostsModel, getAllPostsModel} from '../models/posts.model.js';

export const createPosts = async (req, res) => {
    try {
        const newPost = await createPostsModel(req.body)
        res.status(201).json({post: newPost})
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log('Error al procesar la solicitud:', error);        
    }
};

export const getAllPost = async (req, res) => {
    try {
        console.log("get all")
        const posts = await getAllPostsModel()
        res.status(200).json({posts: posts})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};
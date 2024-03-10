import {createPostsModel, deletePostModel, getAllPostsModel, updatePostModel} from '../models/posts.model.js';

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

export const updatePost = async (req, res) => {
    try {
        const {id} = req.params;
        const posts = await updatePostModel(id, req.body)
        res.status(200).json({posts: posts})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const deletePost = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedPosts = await deletePostModel(id);
        if (deletedPosts === 0) {
            return res.status(404).json({error: `post with id ${id} not found`});
        }
        res.status(200).json({message: `post with id ${id} deleted`})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
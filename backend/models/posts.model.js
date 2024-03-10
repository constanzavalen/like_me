import pool from '../database/config.js'
export const createPostsModel = async ({ titulo, img, descripcion, likes }) => {
    try {
        console.log("query")
        const result = await pool.query(
            'INSERT INTO posts(titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *', 
            [titulo, img, descripcion, likes]
        );
        console.log(result.rows);
        return result.rows[0]
    } catch (error) {
        throw new Error("Error creating posts:" + error.message)
    }
};
export const getAllPostsModel = async () => {
    try {
        const allPost = await pool.query('SELECT * FROM posts')
        console.log(allPost);
        return allPost.rows;
    } catch (error) {
        throw new Error("Error getting posts:" + error.message)
    }
};

export const updatePostModel = async (id, {titulo, img, descripcion, likes}) => {
    try {
        console.log(titulo, img, descripcion, likes)
        const result = await pool.query(
            'UPDATE posts SET titulo=$1, img=$2, descripcion=$3, likes=$4 WHERE id=$5 RETURNING *', 
            [titulo, img, descripcion, likes, id] 
        );
        return result.rows;        
    } catch (error) {
        throw new Error("Error update posts:" + error.message)
    }
   
}

export const deletePostModel = async (id) => {
    try {
        const result = await pool.query('DELETE from posts WHERE id=$1', [id]);
        return result.rowCount;
    } catch (error) {
        throw new Error("Error delete posts:" + error.message)
    }
}

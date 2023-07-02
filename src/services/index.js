import Delete from "./Delete"
import Get from "./Get"
import Post from "./Post"
import Put from "./put"
// POST
const postNewBlog = (data) =>  Post('posts',false, data)

// PUT
const updateNewBlog = (data, id) => Put(`posts/${id}`,false,data)

// DELETE

const deleteBlog = (id) =>  Delete(`posts/${id}`,false)

// GET
const getNewsBlog = ()=> Get ('posts',false)
const getComments = ()=> Get('comments',true)
const API ={
    getNewsBlog,
    getComments,
    postNewBlog,
    updateNewBlog,
    deleteBlog

}

export default API
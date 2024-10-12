const express = require('express')
const {newBlog,getBlogs, getBlogById, updateBlog,deletePost} = require('../controller/Post')

const router = express.Router();

router.post('/', newBlog)
router.get('/', getBlogs)
router.get('/:id', getBlogById)
router.put('/:id', updateBlog)
router.delete('/:id', deletePost)



module.exports = router
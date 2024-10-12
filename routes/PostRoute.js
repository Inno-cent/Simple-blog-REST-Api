const express = require('express')
const {newBlog,getBlogs, getBlogById, updateBlog} = require('../controller/Post')

const router = express.Router();

router.post('/', newBlog)
router.get('/', getBlogs)
router.get('/:id', getBlogById)


module.exports = router
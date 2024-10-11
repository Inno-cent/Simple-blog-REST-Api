const express = require('express')
const {newBlog,getBlogs} = require('../controller/Post')

const router = express.Router();

router.post('/', newBlog)
router.get('/', getBlogs)


module.exports = router
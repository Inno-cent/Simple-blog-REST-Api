const express = require('express')
const {newBlog} = require('../controller/Post')

const router = express.router()

router.post('/', newBlog)

module.exports = router
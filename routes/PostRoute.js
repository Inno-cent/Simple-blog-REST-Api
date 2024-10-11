const express = require('express')
const {newBlog} = require('../controller/Post')

const router = express.Router();

router.post('/', newBlog)

module.exports = router
const router = require('express').Router();

const { createBlogs } = require('../controllers/blogs.controller');

router.get('/new', createBlogs);

module.exports = router;
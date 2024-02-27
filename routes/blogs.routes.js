const router = require('express').Router();

const { createBlogs, getAllBlogs } = require('../controllers/blogs.controller');

console.log("Blogs Routes");

router.post('/new', createBlogs);
router.get('/', getAllBlogs);

module.exports = router 
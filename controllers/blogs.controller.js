const Blogs = require('../models/blogs.models');

const createBlogs = (req, res) => {
    const newBlogsDoc = new Blogs({
        title: "First Blogs"
    });
    console.log(newBlogsDoc);
    res.sendStatus(200);
}

module.exports = {
    createBlogs
}
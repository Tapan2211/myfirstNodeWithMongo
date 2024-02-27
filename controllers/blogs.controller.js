const Blogs = require('../models/blogs.models');

// const { findAllBlogs, createBlogDocument } = require('../services/blogs.services');
const BlogService = require('../services/blogs.services');
const blogServiceInstancee = new BlogService();

// console.log("Blogs Controller");
const createBlogs = async (req, res) => {

    // const { title, name } = req.body;
    // const newBlogsDoc = new Blogs({
    //     title: title,
    //     name: name
    // });
    // const result = await newBlogsDoc.save();

    const { body } = req;
    const result = await blogServiceInstancee.create(body);
    res.json(result);
}

const getAllBlogs = async (req,res) => {
    try {
        // const blogs = await Blogs.find({})
        const blogs = await blogServiceInstancee.findAllBlogs()
        res.json(blogs)
    } catch (error) {
        res.status(404).json({ message: "Could not fetch blogs from DB", error })
    }
}

module.exports = {
    createBlogs,
    getAllBlogs
}
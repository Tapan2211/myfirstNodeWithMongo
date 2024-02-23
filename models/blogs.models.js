const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    auther: [String],
    content: String,
    publishAt: Date,
    name: String,
    city: String,
    country: String,
    salary: Number
})

const blogModel = mongoose.model('Blogs', blogSchema, "websiteBlogs");

module.exports = blogModel;
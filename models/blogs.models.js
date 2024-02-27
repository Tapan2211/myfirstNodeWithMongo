const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    auther: {type: [String]},
    content: {type :String, default:""},
    publishAt: {type: Date, default :null},
    name: {type: String},
    city: {type :String},
    country: {type: String},
    salary: {type : Number}
})

const blogModel = mongoose.model('Blogs', blogSchema, "websiteBlogs");

module.exports = blogModel;
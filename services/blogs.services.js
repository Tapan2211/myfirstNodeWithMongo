const Blogs = require('../models/blogs.models');

// const findAllBlogs = async () => {
//     const allBlogs = await Blogs.find({});
//     return allBlogs;
// }

// const saveDocument = async (doc) =>{
//     const result =  await doc.save();
//     return result;
// }

// const createBlogDocument = async (body) => {
//     const newDoc = new Blogs(body);
//     const saveDoc = await saveDocument(newDoc);
//     return saveDoc;
// }

// module.exports = {
//     findAllBlogs,
//     createBlogDocument
// }

class BlogService{
    save = async (docs) =>{
        const result = await docs.save();
        return result;
    }

    create = async (body) =>{
        const newDoc = new Blogs(body);
        const saveDoc = await this.save(newDoc);
        return saveDoc;
    }

    findAllBlogs = async () => {
        const allBlogs = await Blogs.find({});
        return allBlogs;
    }
}

module.exports = BlogService
const express = require('express');
const routes = express.Router();

const {
    subscribe, unsubscribe
} = require('../controllers/subscribe');

const {
    createBlog, updateBlog, deleteBlog, getBlog, getAllPostSlugs, getBlogCards
} = require('../controllers/blogs');

routes
    // auth routes
    .post('/subscribe', subscribe)
    .post('/unsubscribe', unsubscribe)
    // blog routes
    .post('/create-post', createBlog)
    .post('/update-post', updateBlog)
    .post('/delete-post', deleteBlog)
    .post('/get-post', getBlog)
    .post('/get-all-posts-slugs', getAllPostSlugs)
    .post('/get-post-cards', getBlogCards)



module.exports = routes;

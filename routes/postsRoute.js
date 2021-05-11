const express = require('express');
const router = express.Router();
const { Post } = require('../models/post');

router.get('/posts', async (req, res) => {
    console.log('/GET - posts');
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Post - Posts
router.post('/posts', async (req, res) => {
    console.log('/POST - posts');
    const { title, body } = req.body;
    console.log(req.params);
    try {
        const post = await Post.create({ title: title, body: body });
        res.json(post);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
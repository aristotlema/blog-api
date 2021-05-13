const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// GET - All posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({ include: 'comments' });
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// GET - post by ID
router.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if(post == null){
            res.status(404).json({ message: "Post with that Id was not found" });
            return;
        }
        res.json(post);
    } catch (err) {
        console.error(err);
    }
});

// POST - Create post
router.post('/', async (req, res) => {
    const { title, body } = req.body;
    try {
        const post = await Post.create({ title: title, body: body });
        res.status(201).json(post);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// PUT - edit post by id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
        const post = await Post.findByPk(id);
        post.title = title;
        post.body = body;

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - delete by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Post.destroy({ where: { id: id }});
        res.json({ message: "Post was deleted"})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
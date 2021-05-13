const express = require('express');
const router = express.Router();
const { Comment } = require('../models');

// Get - All comments
router.get('/', async (req, res) => {
    console.log('/GET - comments');
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// Get - comment by Id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);
        if (comment == null) {
            res.status(404).json({ message: "Comment with that Id was not found"});
            return;
        }
        res.json(comment);
    } catch (err) {
        console.error(err);
    }
});

// POST - Create a comment
router.post('/', async (req, res) => {
    const { title, content, postId } = req.body;
    try {
        const comment = await Comment.create({ title: title, content: content, postId: postId });
        await comment.save();
        res.status(201). json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Put - edit comment by id
router.put('/:id', async (req, res) => {
    // Comments cannot change Post Id
    const { title, content } = req.body;
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);
        comment.title = title;
        comment.content = content;
        
        await comment.save();
        res.json(comment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete - delete by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Comment.destroy({
             where: { id: id } 
        });
        res.json({ message: `Comment ${id} was deleted succesfully` });
    } catch (err){
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
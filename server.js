require('dotenv').config();
const express = require('express');
const { sequelize, Post } = require('./models');
const app = express();


app.use(express.json());


// Get - all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
// Post - Posts
app.post('/posts', async (req, res) => {
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


app.listen({ port: 5000 }, async () => {
    console.log('Server running on port 5000');
    try {
        await sequelize.authenticate();
        console.log('db connected');
    } catch(err) {
        console.error('Connection to DB failed', err);
    }
});
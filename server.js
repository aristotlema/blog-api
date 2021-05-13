require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();


app.use(express.json());

const postsRouter = require('./routes/postsRoute');
const commentsRouter = require('./routes/commentsRoute');

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

app.listen({ port: 5000 }, async () => {
    console.log('Server running on port 5000');
    try {
        await sequelize.authenticate();
        console.log('db connected');
    } catch(err) {
        console.error('Connection to DB failed', err);
    }
});
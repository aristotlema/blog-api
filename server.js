require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();


app.use(express.json());

const postsRouter = require('./routes/postsRoute');
app.use('/posts', postsRouter);

app.listen({ port: 5000 }, async () => {
    console.log('Server running on port 5000');
    try {
        await sequelize.authenticate();
        console.log('db connected');
    } catch(err) {
        console.error('Connection to DB failed', err);
    }
});
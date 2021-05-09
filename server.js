require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const app = express();


app.use(express.json());


const sequelize = new Sequelize('blog_database', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});


const testDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');  
    } catch (err) {
        console.error('Unable to connect to the database:', error);
    }
}
testDBConnection();



app.listen(4001, () => console.log('Server Started'));
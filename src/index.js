const express = require('express')
const db = require('./db/models')
require('dotenv').config();


const app = express()
const PORT = process.env.PORT || 2000;

db.sequelize.sync({ alter: false }).then(() => {
    console.log('Database Connected!');
    app.listen(PORT,() => {
        console.log(`Server listening on port: ${PORT}`)
    })
})

module.exports = app;
const express = require('express');
const moongoose = require('mongoose');
const url = 'mongodb://localhost/Players'

const app = express();

moongoose.connect(url, { useNewUrlParser: true})
const con = moongoose.connection;

con.on('open', () => {
    console.log("Connected to MongoDB");
});

app.use(express.json())

const playerRouter = require('./routes/players');
app.use('/players', playerRouter);

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})
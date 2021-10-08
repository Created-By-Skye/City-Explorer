require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(`Hello`);
});

app.get('/about', (req, res) => {
    res.send(`ABout me`);
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
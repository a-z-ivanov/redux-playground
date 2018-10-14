const path = require('path');
const express = require('express');
const app = express();
const pathToPublic = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(pathToPublic));

app.get('*', (req, res) => {
    res.sendFile(path.join(pathToPublic, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('My first App! With AWS devOps'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

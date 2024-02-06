const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
// causes an error
const get_pages = require('./scripts/register_pages.js');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const pages = {
    'index': ['/', '/home', '/index'],
    'bio': ['/bio']
};

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

// required class (singleton) returns cached object
// then we iterate through each and update `pages` object with static routes
let pages_collection = new get_pages();
pages_collection.forEach((index, route) => {
    pages.index = [route];
});

Object.entries(pages).forEach(([page, urls]) => {
    urls.forEach(url => {
        app.get(url, (req, res) => {
            res.sendFile(path.join(__dirname, 'public', `${page}.html`));
        });
    });
});

const server = http.createServer(app);

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening on port ${port}`);
});

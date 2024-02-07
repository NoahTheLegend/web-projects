const http = require('http');
const port = 3000;
const express = require('express');
const app = express();

const {registerPages, pagesCollection} = require('./public/scripts/register_pages.js');
registerPages;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const pages = {
    'index': ['/', '/home', '/index'],
    'bio': ['/bio']
};

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

console.log(pagesCollection);
pagesCollection.forEach((route, index) => {
    pagesCollection.index = route;
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

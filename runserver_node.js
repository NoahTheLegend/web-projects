const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const path = require('path');
const { registerPages, getPages } = require('./public/scripts/register_pages.js');
const buildSamplesGridFromPages = require('./public/scripts/build_samples_grid.js');

let pages;
async function load() {
    await registerPages();
    pages = await getPages();
}
load();

app.get('/get_samples', (req, res) => {
    res.send(buildSamplesGridFromPages(pages));
});

app.use(express.static(path.join(__dirname, 'public')));

const routes = {
    'index': ['/', '/home', '/index'],
    'bio': ['/bio']
};

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

Object.entries(routes).forEach(([page, urls]) => {
    urls.forEach(url => {
        app.get(url, (req, res) => {
            res.sendFile(path.join(__dirname, 'public', `${page}.html`));
        });
    });
});

const server = http.createServer(app);

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening http://localhost:${port}`);
});

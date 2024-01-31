const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  const extname = path.extname(filePath);

  const contentType = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".ttf": "font/ttf",
  };

  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      console.error(err);
      return;
    }

    res.writeHead(200, { "Content-Type": contentType[extname] || "text/plain" });
    res.end(content);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

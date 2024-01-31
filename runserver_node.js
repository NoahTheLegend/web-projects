const path = require("path");
const express = require("express");
const app = express();

app.use('/*', express.static(path.resolve(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});

const port = process.env.PORT
;
app.listen(port, () => {
  console.log(`Listening gracefully on port ${port}`);
});

const express = require("express");
const Parser = require("rss-parser");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const parser = new Parser();
  const rssResponse = await parser.parseURL("https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss");
  res.send(rssResponse);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
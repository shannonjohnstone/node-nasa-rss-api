const express = require("express");
const Parser = require("rss-parser");

const { errorHandler, } = require("./middleware/error-handler");
const { routeNotFound, } = require("./middleware/route-not-found");
const { formatResponse, } = require("./utilities/format-response");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const parser = new Parser();
  const rssResponse = await parser.parseURL("https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss");
  res.send(formatResponse(rssResponse, 10));
});

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
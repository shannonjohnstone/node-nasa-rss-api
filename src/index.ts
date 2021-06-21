import express from "express";
import Parser from "rss-parser";

import { errorHandler, } from "./middleware/error-handler";
import { routeNotFound, } from "./middleware/route-not-found";
import { formatResponse, } from "./utilities/format-response";
import { asyncHandler } from "./utilities/async-handler"
const app = express();
const port = 3000;

app.get("/", asyncHandler(async (req, res) => {
  const parser = new Parser();
  const rssResponse = await parser.parseURL("https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rs");
  res.send(formatResponse(rssResponse, 10));
}));

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export { app }
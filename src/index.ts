import express from "express";

import { errorHandler, } from "./middleware/error-handler";
import { routeNotFound, } from "./middleware/route-not-found";
import { asyncHandler } from "./utilities/async-handler"
import { getNasaRssFeedResponse, getSortedNasaRssFeedResponse } from "./controllers/nasa-rss-feed-controller"

const app = express();
const port = 3000;

app.get("/", asyncHandler(getNasaRssFeedResponse));
app.get("/sort", asyncHandler(getSortedNasaRssFeedResponse));

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export { app }
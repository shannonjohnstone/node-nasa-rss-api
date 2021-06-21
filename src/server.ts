import express from "express";

import { errorHandler } from "./middleware/error-handler";
import { routeNotFound } from "./middleware/route-not-found";
import { asyncHandler } from "./utilities/async-handler";
import { getNasaRssFeedResponse, getSortedNasaRssFeedResponse } from "./controllers/nasa-rss-feed-controller";

const app = express();

app.get("/", asyncHandler(getNasaRssFeedResponse));
app.get("/sort", asyncHandler(getSortedNasaRssFeedResponse));

app.use(routeNotFound);
app.use(errorHandler);

export { app };
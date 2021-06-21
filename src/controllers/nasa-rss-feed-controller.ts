import { Request, Response } from "express";
import { ORDER } from "../utilities/nasa-rss-feed-types";
import { getNasaRssResponse } from "../services/nasa-rss-feed-service";

function isValidQuery(query?: unknown): boolean {
  return !!query && (query === ORDER.ASC || query === ORDER.DSC);
}

export async function getNasaRssFeedResponse(req: Request, res: Response): Promise<void> {
  const rssResponse = await getNasaRssResponse({ order: ORDER.DSC, });
  res.send(rssResponse);
}

interface RssFeedRequest extends Request {
  query: { order?: ORDER.ASC | ORDER.DSC }
}

/* eslint-disable-next-line */
export async function getSortedNasaRssFeedResponse(req: RssFeedRequest, res: Response): Promise<void> {
  const { order, } = req.query;

  // validation of the order parameter could have been its own controller or middleware
  if (isValidQuery(order)) {
    const rssResponse = await getNasaRssResponse({ order, });
    res.send(rssResponse);
  } else {
    res.status(400).send("Bad request");
  }
}
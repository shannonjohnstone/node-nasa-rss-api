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

type ReqQuery = { order?: ORDER.ASC | ORDER.DSC }

/* eslint-disable-next-line */
export async function getSortedNasaRssFeedResponse(req: Request<any, any, any, ReqQuery>, res: Response): Promise<void> {
  const { order, } = req.query;

  if (isValidQuery(order)) {
    const rssResponse = await getNasaRssResponse({ order, });
    res.send(rssResponse);
  } else {
    res.status(400).send("Bad request");
  }
}
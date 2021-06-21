import { Request, Response } from "express";
import { formatResponse, } from "../utilities/format-response";
import { requestRssFeed } from "../integration/rss-feed"

const NASA_RSS_FEED_ENDPOINT = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

export async function getNasaRssFeedResponse(req: Request, res: Response): Promise<void> {
  const rssResponse = await requestRssFeed(NASA_RSS_FEED_ENDPOINT);
  res.send(formatResponse(rssResponse, 10));
}
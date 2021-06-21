import { Request, Response } from "express";
import { formatResponse, } from "../utilities/format-response";
import { requestRssFeed } from "../integration/rss-feed"
import { ORDER } from "../utilities/nasa-rss-feed-types"
const NASA_RSS_FEED_ENDPOINT = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

function sort10ItemsToReturn(rssResponse: any, limit = 10, order?: string) {
  const sortedItems = rssResponse.items.sort((a: any, b: any) => {
    if (order === ORDER.ASC) {
      // @ts-ignore
      return new Date(a["pubDate"]) - new Date(b["pubDate"]);
    }

    if (order === ORDER.DSC) {
      // @ts-ignore
      return new Date(b["pubDate"]) - new Date(a["pubDate"]);
    }

    return -1;
  }).slice(0, limit)

  return {
    ...rssResponse,
    items: sortedItems
  }
}

function isValidQuery(query?: unknown): boolean {
  return !!query && (query === ORDER.ASC || query === ORDER.DSC);
}

export async function getNasaRssFeedResponse(req: Request, res: Response): Promise<void> {
  const rssResponse = await requestRssFeed(NASA_RSS_FEED_ENDPOINT);
  const response = formatResponse(sort10ItemsToReturn(rssResponse, 10, "dsc"));
  res.send(response);
}

type ReqQuery = { order?: ORDER.ASC | ORDER.DSC }

export async function getSortedNasaRssFeedResponse(req: Request<any, any, any, ReqQuery>, res: Response): Promise<void> {
  const { order } = req.query;

  if (isValidQuery(order)) {
    const rssResponse = await requestRssFeed(NASA_RSS_FEED_ENDPOINT);
    const response = formatResponse(sort10ItemsToReturn(rssResponse, 10, order));
    res.send(response);
  } else {
    res.status(400).send("Bad request")
  }
}
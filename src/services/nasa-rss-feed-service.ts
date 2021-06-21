import { formatResponse } from "../utilities/format-response";
import { requestRssFeed } from "../integration/rss-feed";
import { ORDER, RssFeedResponse } from "../utilities/nasa-rss-feed-types";
import { sortItemsByDate } from "../utilities/sort-items-by-date";

const NASA_RSS_FEED_ENDPOINT = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";
interface GetNasaRssResponse {
  order?: ORDER.ASC | ORDER.DSC
}

export async function getNasaRssResponse({ order, }: GetNasaRssResponse = {}): Promise<RssFeedResponse> {
  const rssResponse = await requestRssFeed(NASA_RSS_FEED_ENDPOINT);
  const rssWithSortedItems = sortItemsByDate({ rssResponse, order, limit: 10, });

  return formatResponse(rssWithSortedItems);
}
import { formatResponse } from "../utilities/format-response";
import { requestRssFeed } from "../integration/rss-feed";
import { ORDER, RssFeedResponse, NASARssFeedItems } from "../utilities/nasa-rss-feed-types";

const NASA_RSS_FEED_ENDPOINT = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

interface SortedItems {
  rssResponse: any
  limit?: number,
  order?: string
}

function sortItemsToReturn({ rssResponse, limit = 10, order = ORDER.DSC, }: SortedItems) {
  const sortedItems = rssResponse.items.sort((a: NASARssFeedItems, b: NASARssFeedItems) => {
    if (order === ORDER.ASC) {
      // @ts-ignore
      return new Date(a["pubDate"]) - new Date(b["pubDate"]);
    }

    if (order === ORDER.DSC) {
      // @ts-ignore
      return new Date(b["pubDate"]) - new Date(a["pubDate"]);
    }

    return -1;
  }).slice(0, limit);

  return {
    ...rssResponse,
    items: sortedItems,
  };
}


export async function getNasaRssResponse(): Promise<RssFeedResponse> {
  const rssResponse = await requestRssFeed(NASA_RSS_FEED_ENDPOINT);
  const rssWithSortedItems = sortItemsToReturn({ rssResponse, });

  return formatResponse(rssWithSortedItems);
}

export async function getSortedNasaRssResponse(order?: ORDER.ASC | ORDER.DSC): Promise<RssFeedResponse> {
  const rssResponse = await requestRssFeed(NASA_RSS_FEED_ENDPOINT);
  const rssWithSortedItems = sortItemsToReturn({ rssResponse, order, });

  return formatResponse(rssWithSortedItems);
}
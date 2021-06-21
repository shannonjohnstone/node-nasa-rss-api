import { ORDER, NASARssFeedItems, NASARssFeed } from "./nasa-rss-feed-types";

interface SortedItems {
  rssResponse: any
  limit?: number,
  order?: ORDER.ASC | ORDER.DSC
}

export function sortItemsByDate({ rssResponse, limit, order, }: SortedItems): NASARssFeed {
  // make sure a new array is sorted, not to mutate, was not causing an issue but could do in the future
  const items = [...rssResponse.items,];

  const sortedItems = items.sort((a: NASARssFeedItems, b: NASARssFeedItems) => {
    const key = "pubDate";

    if (order === ORDER.ASC) {
      // @ts-ignore
      return new Date(a[key]) - new Date(b[key]);
    }

    if (order === ORDER.DSC) {
      // @ts-ignore
      return new Date(b[key]) - new Date(a[key]);
    }

    return 1;
  }).slice(0, limit);

  return {
    ...rssResponse,
    items: sortedItems,
  };
}
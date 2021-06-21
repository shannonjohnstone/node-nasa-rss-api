import { convertISODateToAEST } from "./format-iso-date-to-AEST";
import { NASARssFeedItems, RssFeedResponse } from "./nasa-rss-feed-types";

// TODO: come back tp response: any
export function formatResponse(response: any): RssFeedResponse {
  const { title, description, items, } = response;

  function formatEpisodes(episode: NASARssFeedItems) {
    const { title, pubDate, enclosure, } = episode;
    return {
      title: title,
      audioUrl: enclosure.url,
      publishedDate: convertISODateToAEST(pubDate),
    };
  }

  return {
    title: title,
    description: description,
    episodes: items.map(formatEpisodes),
  };
}
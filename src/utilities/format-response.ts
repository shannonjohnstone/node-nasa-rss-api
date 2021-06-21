import { convertISODateToAEST } from "./format-iso-date-to-AEST";
import { NASARssFeedItems, RssFeedResponse, NASARssFeed } from "./nasa-rss-feed-types";

export function formatResponse(response: NASARssFeed): RssFeedResponse {
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
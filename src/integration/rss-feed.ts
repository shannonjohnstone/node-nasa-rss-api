import Parser from "rss-parser";

export async function requestRssFeed(endpoint: string): Promise<unknown> {
  const parser = new Parser();
  return parser.parseURL(endpoint);
}
export enum ORDER { ASC = "asc", DSC = "dsc" }
export interface NASARssFeedItems {
  title: string
  pubDate: string
  enclosure: { url: string }
}
export interface FormateResponse {
  title: string
  description: string
  items: NASARssFeedItems[]
}
export interface RssFeedResponse {
  title: string
  description: string,
  episodes: Array<{
    title: string
    audioUrl: string,
    publishedDate: string | undefined,
  }>
}
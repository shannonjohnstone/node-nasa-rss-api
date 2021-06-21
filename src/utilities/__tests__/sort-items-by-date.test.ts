import { sortItemsByDate } from "../sort-items-by-date";
import { ORDER } from "../../utilities/nasa-rss-feed-types";
import rssResponse from "./json-nasa-rss-mock.json";

describe("Sort RSS items", () => {
  describe("Sort items and return defined amount", () => {
    it("should return 2 items", () => {
      const response = sortItemsByDate({ rssResponse, limit: 2, });
      expect(response.items.length).toEqual(2);
    });

    it("should not mutate original items", () => {
      const response = sortItemsByDate({ rssResponse, limit: 2, order: ORDER.ASC, });
      expect(response.items[0].title).not.toEqual(rssResponse.items[0].title);
    });
  });
});

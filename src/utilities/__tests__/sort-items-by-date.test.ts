import { sortItemsByDate } from "../sort-items-by-date";
import rssResponse from "./json-nasa-rss-mock.json";

describe("Sort RSS items", () => {
  describe("Sort items and return defined amount", () => {
    it("should return 2 items", () => {
      const response = sortItemsByDate({ rssResponse, limit: 2, });
      expect(response.items.length).toEqual(2);
    });
  });
});

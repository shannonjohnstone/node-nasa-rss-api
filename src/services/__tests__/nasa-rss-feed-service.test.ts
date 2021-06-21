import { getNasaRssResponse, getSortedNasaRssResponse } from "../nasa-rss-feed-service";
import { ORDER } from "../../utilities/nasa-rss-feed-types";

jest.mock("../../integration/rss-feed", () => {
  return {
    requestRssFeed: () => require("../../utilities/__tests__/json-nasa-rss-mock.json"),
  };
});

describe("NASA RSS feed service", () => {
  describe("getNasaRssFeedService", () => {
    it("should meet basic requirements", async () => {
      // const spy = jest.fn();
      const response = await getNasaRssResponse();
      const matcher = {
        title: "Houston We Have a Podcast",
        /* eslint-disable-next-line */
        description: "If you’re fascinated by the idea of humans traveling through space and curious about how that all works, you’ve come to the right place. This is the official podcast of the NASA Johnson Space Center in Houston, Texas.",
      };

      expect(response).toMatchObject(matcher);
      expect(Array.isArray(response.episodes)).toBeTruthy();
      expect(response.episodes.length).toEqual(10);
    });

    it("should order dsc", async () => {
      const response = await getSortedNasaRssResponse(ORDER.DSC);

      expect(response.episodes[0].title).toEqual("Liftoff Live");
    });

    it("should order asc", async () => {
      const response = await getSortedNasaRssResponse(ORDER.ASC);

      expect(response.episodes[0].title).toEqual("International Space Station");
    });
  });
});
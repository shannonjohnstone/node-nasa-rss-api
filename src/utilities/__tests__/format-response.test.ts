import { formatResponse, } from "../format-response";
import jsonMockNasaRssResponse from "./json-nasa-rss-mock.json";


describe("Format response", () => {
  describe("should meet basic formatting requirements response to be formatted", () => {
    it("should have title, description and episodes", () => {
      const response = formatResponse(jsonMockNasaRssResponse);
      expect(response.title).toEqual("Houston We Have a Podcast");

      /* eslint-disable-next-line*/
      expect(response.description).toEqual("If you’re fascinated by the idea of humans traveling through space and curious about how that all works, you’ve come to the right place. This is the official podcast of the NASA Johnson Space Center in Houston, Texas.");

      expect(Array.isArray(response.episodes)).toBeTruthy();
    });

    it("episode should have title, audioUrl and publishedDate", () => {
      const { episodes, } = formatResponse(jsonMockNasaRssResponse);
      const firstEpisode = episodes[0];
      expect(firstEpisode.title).toEqual("Liftoff Live");

      expect(firstEpisode.publishedDate).toEqual("19/06/2021, 12:35:00 am AEST");

      /* eslint-disable-next-line*/
      expect(firstEpisode.audioUrl).toEqual("http://www.nasa.gov/sites/default/files/atoms/audio/ep200_liftoff_live.mp3");

    });

    // it("should have 10 episodes", () => {
    //   const { episodes, } = formatResponse(jsonMockNasaRssResponse, 10);

    //   expect(episodes.length).toEqual(10);
    // });
  });
});

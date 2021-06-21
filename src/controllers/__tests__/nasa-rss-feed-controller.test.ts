import { Request } from "express";
import { getNasaRssFeedResponse } from "../nasa-rss-feed-controller";
import * as nasaRssFeedService from "../../services/nasa-rss-feed-service";


describe("NASA product RSS feed controller", () => {
  it("getNasaRssFeedResponse", async () => {
    const expressResSendSpy = jest.fn();

    const getNasaRssResponseSpy = jest.spyOn(
      nasaRssFeedService,
      "getNasaRssResponse"
    );


    const mockResponse: any = { // TODO: Come back to this any
      send: expressResSendSpy,
    };

    await getNasaRssFeedResponse({} as Request, mockResponse);

    expect(expressResSendSpy).toHaveBeenCalled();
    expect(getNasaRssResponseSpy).toHaveBeenCalled();
  });
});

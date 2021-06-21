import { Request } from "express";
import { getNasaRssFeedResponse } from "../nasa-rss-feed-controller";

jest.mock("../../integration/rss-feed", () => {
  return {
    requestRssFeed: () => require("../../utilities/__tests__/json-nasa-rss-mock.json"),
  };
});

describe("NASA product RSS feed controller", () => {
  it("getNasaRssFeedResponse", async () => {
    const spy = jest.fn();

    const mockResponse: any = { // TODO: Come back to this any
      send: spy,
    };

    await getNasaRssFeedResponse({} as Request, mockResponse);
    expect(spy).toHaveBeenCalled();
  });
});

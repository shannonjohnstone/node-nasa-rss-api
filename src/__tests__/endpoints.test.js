const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe("Root endpoint", () => {
  it("should return 200", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
  });
});

describe("Route not found", () => {
  it("should return 404", async () => {
    const res = await request.get("/this-is-not-the-route-your-are-looking-for");
    expect(res.status).toBe(404);
  });
});
const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe("Root endpoint", () => {
  it("should return 200", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
  });
});
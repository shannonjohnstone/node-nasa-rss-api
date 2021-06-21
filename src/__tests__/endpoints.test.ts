import supertest from "supertest";
import { app } from "../index";

const request = supertest(app);

describe("Root endpoint", () => {
  it("should return 200", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
  });
});

describe("Sort endpoint", () => {
  it("should return 200", async () => {
    const res = await request.get("/sort?order=dsc");
    expect(res.status).toBe(200);
  });

  it("should return 400", async () => {
    const res = await request.get("/sort?order=cat");
    expect(res.status).toBe(400);
  });
});

describe("Route not found", () => {
  it("should return 404", async () => {
    const res = await request.get("/this-is-not-the-route-your-are-looking-for");
    expect(res.status).toBe(404);
  });
});
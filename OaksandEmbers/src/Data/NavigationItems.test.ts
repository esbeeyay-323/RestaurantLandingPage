import { describe, expect, it } from "vitest";
import { navigationItems } from "./NavigationItems";

describe("navigationItems", () => {
  it("contains unique internal routes for every primary page", () => {
    const paths = navigationItems.map((item) => item.to);

    expect(new Set(paths).size).toBe(paths.length);
    expect(paths).toEqual([
      "/",
      "/menu",
      "/reservations",
      "/about",
      "/gallery",
      "/contact",
    ]);
    expect(paths.every((path) => path.startsWith("/"))).toBe(true);
  });
});

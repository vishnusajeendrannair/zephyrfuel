import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/fleet", "/industrial", "/data-centers", "/model", "/partnerships", "/about", "/careers", "/contact"];
  return routes.map((route) => ({
    url: `https://zephyrfuel.energy${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}

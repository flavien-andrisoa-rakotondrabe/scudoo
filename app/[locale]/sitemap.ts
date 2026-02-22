import { LOCALES } from "@/constants/locale";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const locales = LOCALES.map((item) => item.tag);

  const routes = ["", "/join-us"];

  return routes.flatMap((route) => {
    return locales.map((locale) => {
      const url = `${baseUrl}/${locale}${route}`;

      return {
        url: url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
        languages: {
          fr: `${baseUrl}/fr${route}`,
          en: `${baseUrl}/en${route}`,
        },
      } as MetadataRoute.Sitemap[number];
    });
  });
}

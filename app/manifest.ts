import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: "Arjun VS",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000319",
    theme_color: "#000319",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}

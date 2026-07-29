import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repository?.endsWith(".github.io");
const base = process.env.SITE_BASE ?? (repository && !isUserSite ? `/${repository}` : "/");

export default defineConfig({
  site: process.env.SITE_URL ?? "https://Intern-WS.github.io",
  base,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()]
});

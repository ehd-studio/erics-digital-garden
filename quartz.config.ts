import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "The Digital Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "ehd-studio.github.io/erics-digital-garden/README",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Doto",
        header: "IBM Plex Sans",
        body: "Libertinus Serif",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eee6d8",
          lightgray: "#C3AF8D",
          gray: "#987F55",
          darkgray: "#6E552B",
          dark: "#2b2b2b",
          secondary: "#788b00",
          tertiary: "#9a2204",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#00419f",
        },
        darkMode: {
          light: "#443C28",
          lightgray: "#6F5B2E",
          gray: "#4E2828",
          darkgray: "#2A1B1B",
          dark: "#060606",
          secondary: "#9a2204",
          tertiary: "#788b00",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#365da5",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

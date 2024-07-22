import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swift VS TypeScript",
  description: "Comparison CheatSheet for Swift VS TypeScript",
  head: [
    ['meta', { property: "og:site_name", content: "Swift VS TypeScript" }],
    ['meta', { property: "og:title", content: "Swift VS TypeScript" }],
    ['meta', { property: "og:url", content: "https://mesqueeb.github.io/SwiftVsTypeScript/" }],
    ['meta', { property: "og:type", content: "website" }],
    ['meta', { property: "og:image", content: "https://mesqueeb.github.io/SwiftVsTypeScript/logo.png" }],
    ['meta', { property: "og:image:width", content: "504" }],
    ['meta', { property: "og:image:height", content: "504" }],
    ['meta', { name: "twitter:title", content: "Swift VS TypeScript" }],
    ['meta', { name: "twitter:image", content: "https://mesqueeb.github.io/SwiftVsTypeScript/logo.png" }],
    ['meta', { name: "twitter:url", content: "https://mesqueeb.github.io/SwiftVsTypeScript/" }],
    ['meta', { name: "twitter:card", content: "summary" }],
  ],
  srcDir: './pages',
  base: '/SwiftVsTypeScript/',
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'CheatSheet', link: '/arrays' },
      { text: 'JustSugar', link: '/justSugar' }
    ],
    sidebar: [
      {
        text: 'CheatSheet',
        items: [
          { text: 'Arrays', link: '/arrays' },
          { text: 'Objects', link: '/objects' },
          { text: 'Strings', link: '/strings' },
          { text: 'Sets', link: '/sets' },
          { text: 'Maps', link: '/maps' },
          { text: 'Iterations', link: '/iterations' },
          { text: 'Async Await', link: '/asyncAwait' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mesqueeb' }
    ],
    footer: {
      message: 'Made with 💙 by <a href="https://github.com/mesqueeb">Luca Ban - mesqueeb</a>',
    },
  }
})

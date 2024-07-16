import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swift VS TypeScript",
  description: "Comparison CheatSheet for Swift VS TypeScript",
  srcDir: './pages',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'CheatSheet', link: '/arrays' }
    ],
    sidebar: [
      {
        text: 'CheatSheet',
        items: [
          { text: 'Arrays', link: '/arrays' },
          { text: 'Objects', link: '/objects' },
          { text: 'Loops', link: '/loops' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mesqueeb' }
    ]
  }
})

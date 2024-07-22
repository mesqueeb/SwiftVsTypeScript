---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Swift VS TypeScript"
  text: "Comparison CheatSheet"
  tagline: For those dabbling in both languages 👏🏻

  image:
    src: /logo.png
    alt: Swift VS TypeScript Logo
  actions:
    - theme: brand
      text: See CheatSheet
      link: /arrays
    - theme: alt
      text: Swift Helper Library
      link: /justSugar

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

Coming from TypeScript, we still need to rewire what common methods are called in Swift. Eg. Instead of `array.every()` you need to reach for `array.allSatisfy()`.

This CheatSheet is a quick reference from a TypeScript perspective to check what the equivalent methods are in Swift.

<sub class="text-right">(PRs welcome to add a Swift first approach for Swift devs looking to learn TS!)</sub>

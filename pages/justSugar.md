# JustSugar 🍰

<p style="display: flex; gap: 1rem; margin-top: 2rem;">
  <a src="https://swiftpackageindex.com/mesqueeb/JustSugar"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fmesqueeb%2FJustSugar%2Fbadge%3Ftype%3Dswift-versions" /></a>
  <a src="https://swiftpackageindex.com/mesqueeb/JustSugar"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fmesqueeb%2FJustSugar%2Fbadge%3Ftype%3Dplatforms" /></a>
</p>

```
.package(url: "https://github.com/mesqueeb/JustSugar", from: "0.2.2")
```

## Get hints in your IDE

I built a Swift library called [JustSugar](https://swiftpackageindex.com/mesqueeb/justsugar) to help new Swift developers coming from TypeScript. Just sugar does two things:

1. Adds useful Array and String methods inspired by JS like `.at`, `.slice`, `.join`, etc.
2. Adds all the most common JS Array and String methods to Swift, with deprecation warnings where Swift has an alternative that is just as good.
    - In this case we want to prefer the Swift method, so a deprecation warning is shown with a comment showing the Swift equivalent to use instead. This is perfect for new Swift developers coming from TypeScript as a quick reference.

**Example of the .slice method**

<img width="500" alt="example of the slice method" src="https://github.com/mesqueeb/JustSugar/raw/main/docs/public/eg-shorthands.png" />

**Example of JS methods with deprecation warning prompting to use the Swift equivalent**

<img width="800" alt="example of JS methods with deprecation warning" src="https://github.com/mesqueeb/JustSugar/raw/main/docs/public/eg-deprecations.png" />

## JustSugar Documentation

See the SPM [JustSugar documentation](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift) to see all the added Array & String methods.

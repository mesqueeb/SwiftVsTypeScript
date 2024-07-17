# Strings

## .at

```ts
// access by index
// out of range returns undefined
// negative indexes count back from end
const character = string.at(index)
```

```swift
// No equivalent, use JustSugar library
import JustSugar

let character = string.at(index)
```

## .endsWith

```ts
if (string.endsWith(characters)) // ...
```

```swift
if string.hasSuffix(characters) { /* */ }
```

## .includes

```ts
if (string.includes(characters)) // ...
```

```swift
if string.contains(characters) { /* */ }
```

## .indexOf

```ts
const index = string.indexOf(characters)
```

```swift
let index = string.range(of: characters)?.lowerBound.utf16Offset(in: string)
```

## .lastIndexOf

```ts
const index = string.lastIndexOf(characters)
```

```swift
let index = string.range(of: characters, options: .backwards)?.lowerBound.utf16Offset(in: string)
```

## .matchAll

```ts
const regex = /t(e)(st(\d?))/g

for (const match of "test1test2".matchAll(regex)) {
  console.log(`Found: ${match[0]}, groups: [${match[1]}, ${match[2]}, ${match[3]}] start: ${match.index}`)
}
// Found: test1, groups: [e, st1, 1] start: 0
// Found: test2, groups: [e, st2, 2] start: 5
```

```swift
import RegexBuilder
// global by default
let regex = /t(e)(st(\d?))/
let string = "test1test2"

for match of string.matches(of: regex) {
		print("Found: \(match[0]), groups: [\(match[1]), \(match[2]), \(match[3])] start: \(match.range.lowerBound.utf16Offset(in: string))")
}
// Found: test1, groups: [e, st1, 1] start: 0
// Found: test2, groups: [e, st2, 2] start: 5
```

## .padEnd

```ts
const paddedString = string.padEnd(count, characters)
```

```swift
let paddingCount = string.count - characters.count
let paddedString = string + String(repeating: characters, count: (paddingCount + characters.count - 1) / characters.count)
```

## .padStart

```ts
const paddedString = string.padStart(count, characters)
```

```swift
let paddingCount = string.count - characters.count
let paddedString = String(repeating: characters, count: (paddingCount + characters.count - 1) / characters.count) + string
```

## .repeat

```ts
const newString = string.repeat(count)
```

```swift
let newString = String(repeating: string, count: count)
```

## .replace

```ts
const newString = string.replace(characters, replacement)
```

```swift
let newString = string.replacing(characters, with: replacement, maxReplacements: 1)
```

## .replaceAll

```ts
const newString = string.replaceAll(characters, replacement)
```

```swift
let newString = string.replacing(characters, with: replacement)
```

## .slice

```ts
const characters = string.slice(start, end)
```

```swift
// No equivalent, use JustSugar library
import JustSugar

let characters = string.slice(start, end)
```

## .split

```ts
const array = string.split(characters)
```

```swift
let array = string.split(separator: characters, omittingEmptySubsequences: false).map(String.init)
// or
let array = string.components(separatedBy: characters)
```

## .startsWith

```ts
if (string.startsWith(characters)) // ...
```

```swift
if string.hasPrefix(characters) { /* */ }
```

## .toLowerCase

```ts
const lower = string.toLowerCase()
```

```swift
let lower = string.lowercased()
```

## .toUpperCase

```ts
const upper = string.toUpperCase()
```

```swift
let upper = string.uppercased()
```

## .trim

```ts
const trimmed = string.trim()
```

```swift
let trimmed = string.trimmingCharacters(in: .whitespacesAndNewlines)
```

## .trimEnd

```ts
let trimmed = string.trimEnd()
```

```swift
if let range = string.rangeOfCharacter(from: .whitespacesAndNewlines.inverted, options: .backwards) {
	let trimmed = String(string[..<range.upperBound])
}
```

## .trimStart

```ts
let trimmed = string.trimStart()
```

```swift
if let range = string.rangeOfCharacter(from: .whitespacesAndNewlines.inverted) {
	let trimmed = String(string[range.lowerBound...])
}
```

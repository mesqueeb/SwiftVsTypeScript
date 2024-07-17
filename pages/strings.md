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

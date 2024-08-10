# Strings

## .at

```ts
// access by index
// out of range returns undefined
// negative indexes count back from end
const character = string.at(index)
```

```swift
// No equivalent, use JustSugar* library
import JustSugar

// access by index
// out of range returns nil
// negative indexes count back from end
let character = string.at(index)
```

<sub class="text-right">* see JustSugar [String.at(_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/at(_:))</sub>

## .endsWith

```ts
// check if string ends with characters
if (string.endsWith(characters)) { /* */ }
```

```swift
// check if string ends with characters
if string.hasSuffix(characters) { /* */ }
```

## .includes

```ts
// check if string includes characters
if (string.includes(characters)) { /* */ }
```

```swift
// check if string includes characters
if string.contains(characters) { /* */ }
```

## .indexOf

```ts
// find index of first occurrence of characters
const index = string.indexOf(characters)
```

```swift
// find index of first occurrence of characters
let index = string.range(of: characters)?.lowerBound.utf16Offset(in: string)

// Shorthand with `import JustSugar` *
let index = string.indexOf(characters)
```

<sub class="text-right">* see JustSugar [String.indexOf(_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/indexof(_:))</sub>

## .lastIndexOf

```ts
// find index of last occurrence of characters
const index = string.lastIndexOf(characters)
```

```swift
// find index of last occurrence of characters
let index = string.range(of: characters, options: .backwards)?.lowerBound.utf16Offset(in: string)

// Shorthand with `import JustSugar` *
let index = string.lastIndexOf(characters)
```

<sub class="text-right">* see JustSugar [String.lastIndexOf(_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/lastindexof(_:))</sub>

## .matchAll

```ts
// find all matches of a regular expression
const regex = /t(e)(st(\d?))/g

for (const match of "test1test2".matchAll(regex)) {
  console.log(`Found: ${match[0]}, groups: [${match[1]}, ${match[2]}, ${match[3]}] start: ${match.index}`)
}
// Found: test1, groups: [e, st1, 1] start: 0
// Found: test2, groups: [e, st2, 2] start: 5
```

```swift
// find all matches of a regular expression
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
// pad a string with characters to a target length
// eg. "title".padEnd(10, "-") -> "title-----"
const paddedString = string.padEnd(count, characters)
```

```swift
// pad a string with characters to a target length
// eg. "title".padEnd(10, "-") -> "title-----"
let paddingCount = string.count - characters.count
let paddedString = string + String(repeating: characters, count: (paddingCount + characters.count - 1) / characters.count)

// Shorthand with `import JustSugar` *
let paddedString = string.padEnd(count, characters)
```

<sub class="text-right">* see JustSugar [String.padEnd(_:_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/padend(_:_:))</sub>

## .padStart

```ts
// pad a string with characters to a target length
// eg. "1".padStart(3, "0") -> "001"
const paddedString = string.padStart(count, characters)
```

```swift
// pad a string with characters to a target length
// eg. "1".padStart(3, "0") -> "001"
let paddingCount = string.count - characters.count
let paddedString = String(repeating: characters, count: (paddingCount + characters.count - 1) / characters.count) + string

// Shorthand with `import JustSugar` *
let paddedString = string.padStart(count, characters)
```

<sub class="text-right">* see JustSugar [String.padStart(_:_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/padstart(_:_:))</sub>

## .repeat

```ts
// repeat a string a number of times
// eg. "NY".repeat(3) -> "NYNYNY"
const newString = string.repeat(count)
```

```swift
// repeat a string a number of times
// eg. "NY".repeat(3) -> "NYNYNY"
let newString = String(repeating: string, count: count)
```

## .replace

```ts
// replace first occurrence of characters with replacement
const newString = string.replace(characters, replacement)
```

```swift
// replace first occurrence of characters with replacement
let newString = string.replacing(characters, with: replacement, maxReplacements: 1)
```

## .replaceAll

```ts
// replace all occurrences of characters with replacement
const newString = string.replaceAll(characters, replacement)
```

```swift
// replace all occurrences of characters with replacement
let newString = string.replacing(characters, with: replacement)
```

## .slice

```ts
// extract characters from start index up to end index
// negative indexes count back from end
const characters = string.slice(start, end)
```

```swift
// No equivalent, use JustSugar* library
import JustSugar

// extract characters from start index up to end index
// negative indexes count back from end
let characters = string.slice(start, end)
```

<sub class="text-right">* see JustSugar [String.slice(_:_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/slice(_:_:))</sub>

## .split

```ts
// split a string into an array of substrings by a separator
const array = string.split(characters)
```

```swift
// split a string into an array of substrings by a separator
let array = string.split(separator: characters, omittingEmptySubsequences: false).map(String.init)
// or
let array = string.components(separatedBy: characters)

// Shorthand with `import JustSugar` *
let array = string.split(characters)
```

<sub class="text-right">* see JustSugar [String.split(_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/split(_:)-1gpf2)</sub>

## .startsWith

```ts
// return `true` if string starts with characters
if (string.startsWith(characters)) { /* */ }
```

```swift
// return `true` if string starts with characters
if string.hasPrefix(characters) { /* */ }
```

## .toLowerCase

```ts
// convert a string to lowercase
const lower = string.toLowerCase()
```

```swift
// convert a string to lowercase
let lower = string.lowercased()
```

## .toUpperCase

```ts
// convert a string to uppercase
const upper = string.toUpperCase()
```

```swift
// convert a string to uppercase
let upper = string.uppercased()
```

## .trim

```ts
// remove whitespace from both ends of a string
const trimmed = string.trim()
```

```swift
// remove whitespace from both ends of a string
let trimmed = string.trimmingCharacters(in: .whitespacesAndNewlines)

// Shorthand with `import JustSugar` *
let trimmed = string.trim()
```

<sub class="text-right">* see JustSugar [String.trim()](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/trim())</sub>

## .trimEnd

```ts
// remove whitespace from the end of a string
const trimmed = string.trimEnd()
```

```swift
// remove whitespace from the end of a string
if let range = string.rangeOfCharacter(from: .whitespacesAndNewlines.inverted, options: .backwards) {
	let trimmed = String(string[..< range.upperBound])
}

// Shorthand with `import JustSugar` *
let trimmed = string.trimStart()
```

<sub class="text-right">* see JustSugar [String.trimEnd()](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/trimEnd())</sub>

## .trimStart

```ts
// remove whitespace from the start of a string
const trimmed = string.trimStart()
```

```swift
// remove whitespace from the start of a string
if let range = string.rangeOfCharacter(from: .whitespacesAndNewlines.inverted) {
	let trimmed = String(string[range.lowerBound...])
}

// Shorthand with `import JustSugar` *
let trimmed = string.trimStart()
```

<sub class="text-right">* see JustSugar [String.trimStart()](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/string/trimStart())</sub>

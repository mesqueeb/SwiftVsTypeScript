# Arrays

## Instantiation

```ts
// empty array
const array1: number[] = [] // most common
const array2 = new Array<number>()
const array3: Array<number> = []
const array4: Array<number> = new Array()

// pre-filled array
const array5 = [1, 2, 3] // most common
const array6 = new Array(1, 2, 3)
const array7 = Array.of(1, 2, 3)
const array8 = Array.from([1, 2, 3])

// shorthand to quickly create and populate a big array
const bigArray = new Array(10_000).fill(0).map((i) => (i + 1))
```

```swift
// empty array
let array1: [Int] = [] // most common
let array2 = [Int]() // most common
let array3: Array<Int> = []
let array4 = Array<Int>()
let array5: [Int] = .init()
let array6: Array<Int> = .init()

// pre-filled array
let array7 = [1, 2, 3] // most common
let array8: [Int] = [1, 2, 3]

// shorthand to quickly create and populate a big array
let bigArray = Array(1...10_000)
let bigArray2 = Array(repeating: 0, count: 10_000)
  .enumerated()
	.map { (i, _) in i + 1 }
```

## .at

```ts
// access by index
// out of range returns undefined
// negative indexes count back from end
const item = array.at(index)
```

```swift
// convert negative to positive index
let i = index >= 0 ? index : array.count + index
// out of range returns nil, otherwise access by index
let item = (i >= 0, i < array.count) ? nil : array[i]

// Shorthand with `import JustSugar` *
let index = array.at(index)
```

<sub class="text-right">* see JustSugar [Array.at(_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/array/at(_:))</sub>

## .concat

```ts
// concat to create a new array
let newArray = array1.concat(array2)

// mutate array in place
array1.push(...array2)
```

```swift
// addition to create a new array
let newArray = array1 + array2

// mutate array in place
array1.append(contentsOf: array2)
```

## .entries

```ts
for (const [index, item] of array.entries()) {
	console.log(index, item)
}
```

```swift
for (index, item) in array.enumerated() {
  print(index, item)
}
```

## .every

```ts
// return `true` if all elements match a condition
const allTrue = array.every((item) => item > 0)
```

```swift
// return `true` if all elements match a condition
let allTrue = array.allSatisfy { item in item > 0 }
```

## .fill

```ts
// fill an entire array with a value
array.fill(value)

// fill an array from start to end index with a value
array.fill(value, start, end)
```

```swift
// fill an entire array with a value
array.replaceSubrange(..., with: repeatElement(value, count: array.count))

// fill an array from start to end index with a value
array.replaceSubrange(start ..< end, with: repeatElement(value, count: end - start))
```

## .filter

```ts
// filter elements based on a condition
const filteredArray = array.filter((item) => item > 0)
```

```swift
// filter elements based on a condition
let filteredArray = array.filter { item in item > 0 }
```

## .find

```ts
// find first element that matches a condition
const foundItem = array.find((item) => item > 0)
```

```swift
// find first element that matches a condition
let foundItem = array.first { item in item > 0 }
```

## .findIndex

```ts
// find index of the first element that matches a condition
const foundIndex = array.findIndex((item) => item > 0)
```

```swift
// find index of the first element that matches a condition
let foundIndex = array.firstIndex { item in item > 0 }
```

## .findLast

```ts
// find last element that matches a condition
const foundItem = array.findLast((item) => item > 0)
```

```swift
// find last element that matches a condition
let foundItem = array.last { item in item > 0 }
```

## .findLastIndex

```ts
// find index of the last element that matches a condition
const foundIndex = array.findLastIndex((item) => item > 0)
```

```swift
// find index of the last element that matches a condition
let foundIndex = array.lastIndex { item in item > 0 }
```

## .flat

```ts
// flatten nested arrays to a specified depth
const flatArray = array.flat(depth)
```

```swift
// flatten nested arrays to a specified depth (only supports depth of 1)
let flatArray = array.flatMap { $0 }
```

## .flatMap

```ts
// map each element using a function and flatten the result
const flatMappedArray = array.flatMap((item) => [item, item])
```

```swift
// map each element using a function and flatten the result
let flatMappedArray = array.flatMap { item in [item, item] }
```

## .forEach

```ts
// execute a function for each element
array.forEach((item) => console.log(item))
```

```swift
// execute a function for each element
array.forEach { item in print(item) }
```

## .includes

```ts
// check if array includes an element
const hasItem = array.includes(value)
```

```swift
// check if array includes an element
let hasItem = array.contains(value)
```

## .indexOf

```ts
// find index of first occurrence of an element
const index = array.indexOf(value)
```

```swift
// find index of first occurrence of an element
let index = array.firstIndex(of: value)
```

## .join

```ts
// join elements into a string with a separator
const joinedString = array.join(separator)
```

```swift
// join elements into a string with a separator
let joinedString = array.joined(separator: separator)

// Shorthand with `import JustSugar` *
let joinedString = array.join(separator)
```

<sub class="text-right">* see JustSugar [String.join(_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/array/join(_:))</sub>

## .lastIndexOf

```ts
// find index of last occurrence of an element
const lastIndex = array.lastIndexOf(value)
```

```swift
// find index of last occurrence of an element
let lastIndex = array.lastIndex(of: value)
```

## .length

```ts
// get length of the array
const length = array.length
```

```swift
// get length of the array
let length = array.count
```

## .map

```ts
// map each element using a function
const mappedArray = array.map((item) => item * 2)
```

```swift
// map each element using a function
let mappedArray = array.map { item in item * 2 }
```

## .pop

```ts
// remove the last element
const lastItem = array.pop()
```

```swift
// remove the last element
let lastItem = array.popLast()
```

## .push

```ts
// add an element to the end
array.push(value)

// add multiple elements to the end
array.push(...array2)
```

```swift
// add an element to the end
array.append(value)

// add multiple elements to the end
array.append(contentsOf: array2)
```

## .reduce

```ts
// reduce an array to a number
const sum = array.reduce((total, x) => total + x, 0)

// reduce an array to an object
const wordLengths = words.reduce<{ [key in string]: number }>((result, word) => {
	result[word] = word.length
	return result
}, {})
```

```swift
// reduce an array to a number
let sum = array.reduce(0) { total, x in total + x }

// reduce an array to a dictionary
let wordLengths = words.reduce(into: [String: Int]()) { result, word in
  result[word] = word.count
}
```

## .reverse

```ts
// reverse the array in place
array.reverse()
```

```swift
// reverse the array in place
array.reverse()
```

## .shift

```ts
// remove the first element
const firstItem = array.shift()
```

```swift
// remove the first element
let firstItem = array.removeFirst()
```

## .slice

```ts
// return a shallow copy of a portion of an array
const arraySlice = array.slice(start, end)
```

```swift
// return a shallow copy of a portion of an array
let arraySlice = Array(array[start ..< end])

// Shorthand with `import JustSugar` * (handles negative indexes & prevents out of range errors)
let arraySlice = array.slice(start, end)
```

<sub class="text-right">* see JustSugar [String.slice(_:_:\)](https://swiftpackageindex.com/mesqueeb/justsugar/documentation/justsugar/swift/array/slice(_:_:))</sub>

## .some

```ts
// return `true` if at least one element matches a condition
const hasPositive = array.some((item) => item > 0)
```

```swift
// return `true` if at least one element matches a condition
let hasPositive = array.contains { item in item > 0 }
```

## .sort

```ts
// sort array in place
array.sort((a, b) => a - b)
```

```swift
// sort array in place
array.sort { $0 < $1 }
```

## .splice

```ts
// add/remove elements in place
const removedItems = array.splice(start, deleteCount, item1, item2)
```

```swift
// if you need the removed items, copy them first
let removedItems = array[start ..< start + deleteCount]
// add/remove elements in place
array.removeSubrange(start ..< start + deleteCount)
array.insert(contentsOf: [item1, item2], at: start)
```

## .toReversed

```ts
// return a new array with elements in reverse order
const reversedArray = array.toReversed()
```

```swift
// return a new array with elements in reverse order
let reversedArray = Array(array.reversed())
```

## .toSorted

```ts
// return a new array with elements sorted
const sortedArray = array.toSorted((a, b) => a - b)
```

```swift
// return a new array with elements sorted
let sortedArray = array.sorted { $0 < $1 }
```

## .toSpliced

```ts
// return a new array with elements added/removed
const newArray = array.toSpliced(start, deleteCount, item1, item2)
```

```swift
// return a new array with elements added/removed
var newArray = array
newArray.removeSubrange(start ..< start + deleteCount)
newArray.insert(contentsOf: [item1, item2], at: start)
```

## .unshift

```ts
// add elements to the beginning
array.unshift(value)
```

```swift
// add elements to the beginning
array.insert(value, at: 0)
```

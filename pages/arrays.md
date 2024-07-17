# Arrays

## Instantiation

```ts
const array1 = [1, 2, 3]
const array2 = new Array(1, 2, 3)
const array3 = new Array(3).fill(0).map((i) => (i + 1))
const array4 = Array.of(1, 2, 3)
const array5 = Array.from([1, 2, 3])
```

```swift
let array1 = [1, 2, 3]
let array2 = Array(repeating: 0, count: 3).map { $0 + 1 }
let array3 = Array(1...3)
let array4 = Array([1, 2, 3])
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
```

## .concat

```ts
// concat to create a new array
let newArray = array1.concat(array2)
```

```swift
// concat to create a new array
let newArray = array1 + array2

// also see: concat in place
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
const allTrue = array.every((item) => item > 0)
```

```swift
let allTrue = array.allSatisfy { item in item > 0 }
```

## .fill

```ts
// fill with a value from start to end index
array.fill(value, start, end)
```

```swift
// fill with a value from start to end index
for i in 0..<array.count {
    array[i] = value
}
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
```

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
// add elements to the end
array.push(value)
```

```swift
// add elements to the end
array.append(value)
```

## .reduce

```ts
// reduce array to a single value
const sum = array.reduce((acc, item) => acc + item, 0)
```

```swift
// reduce array to a single value
let sum = array.reduce(0) { acc, item in acc + item }
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
const subArray = array.slice(start, end)
```

```swift
// return a shallow copy of a portion of an array
let subArray = Array(array[start..<end])
```

## .some

```ts
// check if at least one element matches a condition
const hasPositive = array.some((item) => item > 0)
```

```swift
// check if at least one element matches a condition
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
// add/remove elements in place
let removedItems = array[start..<start+deleteCount]
array.removeSubrange(start..<start+deleteCount)
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
newArray.removeSubrange(start..<start+deleteCount)
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

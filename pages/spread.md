# Spread Operator

## Spread merging objects

```ts
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const merged = { ...obj1, ...obj2 }
// { a: 1, b: 3, c: 4 }
```

```swift
// use `.merging(_:uniquingKeysWith:)`
let dict1 = ["a": 1, "b": 2]
let dict2 = ["b": 3, "c": 4]

let merged = dict1.merging(dict2) { (_, new) in new }
// ["a": 1, "b": 3, "c": 4]
```

## Spread in array

```ts
const arr1 = [1, 2]
const arr2 = [3, 4]

const merged = [...arr1, ...arr2]
// [1, 2, 3, 4]
```

```swift
let arr1 = [1, 2]
let arr2 = [3, 4]

let merged = arr1 + arr2
// [1, 2, 3, 4]
```

## Spread as function argument (variadic parameters)

```ts
function logger(...params: any[]) {
  // In TS you can convert the array of parameters back to individual arguments:
	console.log('logger', ...params)
}
```

```swift
func printer(_ params: Any...) {
  // In Swift you cannot convert an array of parameters back to individual unnamed arguments.
  print("printer", params.joined(separator: " "))

	// you can however pass the array to another function that also works with variadic parameters.
	// in that case you pass it like so:
	printer(params...)
}
```

## Spread in array destructuring

```ts
const [first, ...rest] = [1, 2, 3, 4]
console.log(first) // 1
console.log(rest)  // [2, 3, 4]
```

```swift
// Swift doesn’t have direct support for destructuring with ...
// but you can achieve similar results using slicing:
let array = [1, 2, 3, 4]
let first = array.first! // 1
let rest = Array(array.dropFirst()) // [2, 3, 4]
```

## Spread in object destructuring

```ts
const { a, ...rest } = { a: 1, b: 2, c: 3 }
console.log(rest) // { b: 2, c: 3 }
```

```swift
// Swift doesn’t support object destructuring in the same way
// but you can remove keys manually:
var dict = ["a": 1, "b": 2, "c": 3]
let a = dict.removeValue(forKey: "a")
print(dict) // ["b": 2, "c": 3]
```

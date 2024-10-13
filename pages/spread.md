# Spread Operator


## Merging arrays

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

## Merging objects

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

## Destructuring arrays

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

## Destructuring objects

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

## Rest parameters (variadic parameters)

```ts
function logger(...params: any[]) {
  console.log(params.join(' - '))

  // In TS you can convert the array of parameters back to individual arguments:
  console.log('logger ', ...params)
}

logger(1, 2, 3)
// "1 - 2 - 3"
// "logger 1 2 3"
```

```swift
func printer(_ params: Any...) {
  print(params.map { "\($0)" }.joined(separator: " - "))

  // In Swift you cannot convert an array of parameters back to individual unnamed arguments:
  print("printer", params)
}

printer(1, 2, 3)
// "1 - 2 - 3"
// "printer [1, 2, 3]"
```

# Sets

## Instantiation

```ts
// empty set
const set1 = new Set<number>() // most common
const set2: Set<number> = new Set() // most common
const set3: Set<number> = new Set<number>()

// pre-filled set
const set4 = new Set<number>([1, 2, 3]) // most common
const set5: Set<number> = new Set([1, 2, 3])
```

```swift
// empty set
let set1: Set<Int> = [] // most common
let set2 = Set<Int>()
let set3: Set<Int> = .init()

// pre-filled set
let set4: Set<Int> = [1, 2, 3] // most common
let set5 = Set([1, 2, 3])
let set6: Set<Int> = .init(arrayLiteral: 1, 2, 3)
```

## Operations

```ts
const set = new Set([1, 2, 3])

// add value
set.add(4)

// delete value
set.delete(2)

// check if a value exists
const hasThree = set.has(3)

// total value count
const size = set.size

// loop
for (const value of set) {
  // ...
}
```

```swift
var set: Set = [1, 2, 3]

// insert value
set.insert(4)

// remove value
set.remove(2)

// check if a value exists
let hasThree = set.contains(3)

// total value count
let size = set.count

// loop
for value in set {
  // ...
}
```

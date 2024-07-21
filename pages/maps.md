# Maps

## Instantiation

```ts
// empty map
const map1 = new Map<string, number>() // most common
const map2: Map<string, number> = new Map() 
const map3: Map<string, number> = new Map<string, number>()

// pre-filled map
const map4 = new Map<string, number>([["key1", 1], ["key2", 2]]) // most common
const map5: Map<string, number> = new Map([["key1", 1], ["key2", 2]])
```

```swift
// Swift has no Map, use a dictionary instead
// Swift dictionaries keep the order of insertion like TS Maps

// empty dictionary
let map1: [String: Int] = [:] // most common
let map2 = Dictionary<String, Int>()
let map3: [String: Int] = .init()

// pre-filled dictionary
let map4: [String: Int] = ["key1": 1, "key2": 2] // most common
let map5 = Dictionary(uniqueKeysWithValues: [("key1", 1), ("key2", 2)])
let map6 = Dictionary(uniqueKeysWithValues: zip(["key1", "key2"], [1, 2]))
```

## Operations

```ts
const map = new Map([["key1", 1], ["key2", 2]])

// set value
map.set("key3", 3)

// get value
const value = map.get("key1")

// delete value
map.delete("key2")

// check if a key exists
const hasKey = map.has("key1")

// total key-value pair count
const size = map.size

// loop
for (const [key, value] of map) {
  // ...
}
```

```swift
var map: [String: Int] = ["key1": 1, "key2": 2]

// set value
map["key3"] = 3

// get value
let value = map["key1"]

// remove value
map.removeValue(forKey: "key2")

// check if a key exists
let hasKey = map.keys.contains("key1")

// total key-value pair count
let size = map.count

// loop
for (key, value) in map {
  // ...
}
```

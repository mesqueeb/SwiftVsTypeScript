# Objects

## Instantiation

```ts
const object1 = { key1: "value1", key2: "value2" }
const object2 = Object.fromEntries([["key1", "value1"], ["key2", "value2"]])
```

```swift
// use a dictionary when keys are dynamic
let dictionary1: [String: String] = ["key1": "value1", "key2": "value2"]
let dictionary2 = Dictionary<String, String>()
let dictionary3: Dictionary<String, String> = init()
let dictionary4 = Dictionary(uniqueKeysWithValues: [("key1", "value1"), ("key2", "value2")])
let dictionary5 = Dictionary(uniqueKeysWithValues: zip(["key1", "key2"], ["value1", "value2"]))

// use a struct when keys are static
struct MyStruct {
    let key1: String
    let key2: String
}
let struct1 = MyStruct(key1: "value1", key2: "value2")

// use a tuple when keys are static, useful as quick inline objects
let tuple1 = (key1: "value1", key2: "value2")
```

## keys, values, entries

```ts
const keys = Object.keys(object) // ["key1", "key2"]
const values = Object.values(object) // ["value1", "value2"]
const entries = Object.entries(object) // [["key1", "value1"], ["key2", "value2"]]
```

```swift
let keys = Array(dictionary.keys) // ["key1", "key2"]
let values = Array(dictionary.values) // ["value1", "value2"]
let entries = Array(dictionary) // [("key1", "value1"), ("key2", "value2")]
```

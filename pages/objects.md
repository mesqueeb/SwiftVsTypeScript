# Objects

## Instantiation

```ts
// in TS order of insertion is not guaranteed with objects (use Map for this)

// empty object
const obj1: { [key in string]: string } = {} // most common
const obj2: { [key: string]: string } = {}
const obj3: Record<string, string> = {}
const obj4: { [key in string]: string } = new Object()
const obj5: { [key in string]: string } = Object.create(null) // object without prototype

// pre-filled object
const obj6 = { key1: "value1", key2: "value2" } // most common
const obj7 = Object.fromEntries([["key1", "value1"], ["key2", "value2"]])
```

```swift
// in Swift order of insertion is guaranteed with dictionaries

// use a dictionary when keys are dynamic
//   empty dictionary
let dict1: [String: String] = [:]
let dict2 = Dictionary<String, String>()
let dict3: Dictionary<String, String> = .init()

//   pre-filled dictionary
let dict4: [String: String] = ["key1": "value1", "key2": "value2"]
let dict5 = Dictionary(uniqueKeysWithValues: [("key1", "value1"), ("key2", "value2")])
let dict6 = Dictionary(uniqueKeysWithValues: zip(["key1", "key2"], ["value1", "value2"]))

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

### Converting keys, values, entries to arrays

```ts
const keys = Object.keys(object)
// ["key1", "key2"]

const values = Object.values(object)
// ["value1", "value2"]

const entries = Object.entries(object)
// [["key1", "value1"], ["key2", "value2"]]
```

```swift
let keys = Array(dictionary.keys)
// ["key1", "key2"]

let values = Array(dictionary.values)
// ["value1", "value2"]

let entries = Array(dictionary)
// [("key1", "value1"), ("key2", "value2")]
```

### Iterating over keys, values, entries

```ts
for (const key in object) {
  console.log("key: ", key)
}

for (const value of Object.values(object)) {
  console.log("value: ", value)
}

for (const [key, value] of Object.entries(object)) {
  console.log("entry: ", [key, value])
}
```

```swift
for key in dictionary.keys {
  print("key:", key)
}

for value in dictionary.values {
  print("value:", value)
}

for (key, value) in dictionary {
  print("entry:", (key, value))
}
```

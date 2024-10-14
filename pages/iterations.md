# Iterations

## for ... of

```ts
for (const item of array) {
  console.log(item)
}
```

```swift
for item in array {
  print(item)
}
```

## for ... of .entries

```ts
// arrays
for (const [index, item] of array.entries()) {
  console.log(index, item)
}

// objects
for (const [key, item] of Object.entries(object)) {
  console.log(key, item)
}
```

```swift
// arrays
for (index, item) in array.enumerated() {
  print(index, item)
}

// dictionaries
for (key, item) in dictionary {
  print(key, item)
}
```

## .forEach

```ts
array.forEach((item, index) => {
  console.log(item, index)
})
```

```swift
// without index
array.forEach { item in
  print(item)
}

// with index
array.enumerated().forEach { (index, item) in
  print(item, index)
}
```

## while

```ts
let i = 0
while (i < 3) {
  console.log(i)
  i++
}
```

```swift
var i = 0
while i < 3 {
  print(i)
  i += 1
}
```

## for key in object

```ts
for (const key in object) {
  console.log(key)
}
```

```swift
for key in dictionary.keys {
  print(key)
}
```

See [Objects ▶ Iterating](/objects.html#iterating-over-keys-values-entries) for more examples when working with objects/dictionaries.

## classical for loop

```ts
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
```

```swift
for i in 0 ..< array.count {
  print(array[i])
}
```

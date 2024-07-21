# Array Loops

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
for (const [index, item] of array.entries()) {
  console.log(index, item)
}
for (const [key, item] of Object.entries(object)) {
  console.log(key, item)
}
```

```swift
for (index, item) in array.enumerated() {
	print(index, item)
}
for (key, item) in dictionary {
	print(key, item)
}
```

## .forEach

```ts
array.forEach(item => {
  console.log(item)
})
```

```swift
array.forEach { item in
  print(item)
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
  console.log(key, object[key])
}
```

```swift
for key in dictionary.keys {
  print(key, dictionary[key]!)
}
```

# Functions

## Regular functions

```ts
function sum(x: number, y: number): number {
  return x + y
}

// parameter labels are not written when calling
const result = sum(10, 5)
```

```swift
func sum(x: Int, y: Int) -> Int {
  return x + y
}

// by default, parameter labels must be written when calling
let result = sum(x: 10, y: 5)
```

## Parameter Labels (Named vs Unnamed)

```ts
// In TS/JS parameter labels are not written when calling a function.

// Named parameters can be achieved using an object
function greet({ name }: { name: string }) {
  console.log("Hello ", name)
}

greet({ name: "Alice" })
  
// Unnamed parameters
function greet(name: string) {
  console.log("Hello ", name)
}

greet("Bob")
```

```swift
// In Swift there are two ways to define parameters:
// - Named parameters: labels must be written when calling
// - Unnamed parameters: labels must be omitted when calling

// Named parameters
func greet(name: String) {
  print("Hello", name)
}

greet(name: "Alice")

// Unnamed parameters
func greet(_ name: String) {
  print("Hello", name)
}

greet("Bob")
```

## Async functions

```ts
// async function with explicit return type
async function fetchData(): Promise<string> {
  return "data"
}

// await in an async context
const result = await fetchData()
console.log(result)
```

```swift
// async function with explicit return type
func fetchData() async -> String {
  return "data"
}

// await in an async context
let result = await fetchData()
print(result)
```

See [Async Await](/asyncAwait.md) for more details on async functions.

## Arrow functions (closures)

Similar to a TS _arrow function_ is the Swift _closure_. This is what's used when passing functions as parameters.

### Explicit types (as part of the implementation)

```ts
// arrow function with types
const sum = (x: number, y: number): number => x + y

const result = sum(10, 5)
```

```swift
// closure with types
let sum = { (x: Int, y: Int) -> Int in x + y }

// A closure always has unnamed parameters
let result = sum(10, 5)
```

To be honest, I find that a Swift closure is **hard to read** when the types are defined as _part of the closure_. It's more common to define the types _separately_, see the next section "implicit types" to see the difference.

### Implicit types (defined separately)

Here the type signature is defined separately from the implementation. Meaning the implementation has _implicit types_. (in Swift this is more common than explicit types)

```ts
// arrow function with implicit types
const sum: (x: number, y: number) => number = (x, y) => x + y

// OR with a type alias
type SumFn = (x: number, y: number) => number
const sum: SumFn = (x, y) => x + y

const result = sum(10, 5)
```

```swift
// closure with implicit types
let sum: (Int, Int) -> Int = { x, y in x + y }

// OR with a type alias
typealias SumFn = (Int, Int) -> Int
let sum: SumFn = { x, y in x + y }

// A closure always has unnamed parameters
let result = sum(10, 5)
```

### Use as function parameter

```ts
// define a function type as parameter
function operation(
  a: number,
  b: number,
  op: (x: number, y: number) => number
): number {
  return op(a, b)
}

// pass an arrow function as parameter
const result = operation(
  10,
  5,
  (x, y) => x + y
)
```

```swift
// define a function type as parameter
func operation(
  a: Int,
  b: Int,
  op: (Int, Int) -> Int
) -> Int {
  return op(a, b)
}

// pass a closure as parameter
let result = operation(
  a: 10,
  b: 5,
  op: { x, y in x + y }
)
```

## IIFE (Immediately Invoked Function Expression)

### Explicit return type

```ts
const result = ((): string => {
  return "abc"
})()

console.log(result) // "abc"
```

```swift
let result = { () -> String in
  return "abc"
}()

print(result) // "abc"
```

### Implicit return type

Here the type signature is defined separately from the implementation. Meaning the implementation has _implicit types_.

```ts
const result: string = (() => {
  return "abc"
})()

console.log(result) // "abc"
```

```swift
let result: String = {
  return "abc"
}()

print(result) // "abc"
```

### Async IIFE

```ts
const result: string = await (async () => {
  return await fetchData()
})()

console.log(result) // "data"
```

```swift
let result: String = await {
  return await fetchData()
}()

print(result) // "data"
```

## Default Parameters

```ts
function greet(name: string = "Charlie") {
  console.log("Hello, ", name)
}

greet() // "Hello, Charlie"
greet("Edgar") // "Hello, Edgar"
```

```swift
func greet(name: String = "Charlie") {
  print("Hello,", name)
}

greet() // "Hello, Charlie"
greet(name: "Edgar") // "Hello, Edgar"
```

### Multiple default parameters

```ts
// Multiple parameters with defaults
function greet(greeting: string, name: string = "Charlie", punctuation: string = "!") {
  console.log(greeting, name, punctuation)
}

greet("Hi ") // "Hi Charlie!"
greet("Hi ", "Edgar") // "Hi Edgar!"

// When skipping a parameter, you must use `undefined`
greet("Hi ", undefined, "?") // "Hi Charlie?"

// OR

// It's cleaner to use an object with optional parameters in this case
function greet(options: { greeting: string, name?: string, punctuation?: string }) {
  const = { greeting, name = "Charlie", punctuation = "!" } = options
  console.log(greeting, name, punctuation)
}
// Now you can skip the `name` like so:
greet({ greeting: "Hi ", punctuation: "?" }) // "Hi Charlie?"
```

```swift
// Multiple parameters with defaults
func greet(greeting: String, name: String = "Charlie", punctuation: String = "!") {
  print(greeting, name, punctuation)
}

greet(greeting: "Hi") // "Hi Charlie "
greet(greeting: "Hi", name: "Edgar") // "Hi Edgar !"

// You can skip any named parameter with default value
greet(greeting: "Hi", punctuation: "?") // "Hi Charlie ?"
```

## Rest parameters (variadic parameters)

```ts
function logger(...params: any[]) {
  console.log(params.join(" - "))

  // In TS you can convert the array of parameters back to individual arguments:
  console.log("logger ", ...params)
}

logger(1, 2, 3)
// "1 - 2 - 3"
// "logger 1 2 3"
```

```swift
func printer(_ params: Any...) {
  print(params.map { "\($0)" }.joined(separator: " - "))

  // In Swift you cannot convert an array of parameters back to individual arguments:
  print("printer", params)
}

printer(1, 2, 3)
// "1 - 2 - 3"
// "printer [1, 2, 3]"
```

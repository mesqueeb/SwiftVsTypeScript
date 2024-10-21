# Async Await

## Awaiting async functions

### Without return value

```ts
// Defining an async function always returns a "promise"
async function querySomething(): Promise<void> {
  // inside of an async function you can use await
  await // ...
}

// in an async context you can await the execution
await querySomething()
```

```swift
// Defining an async function
func querySomething() async -> Void {
  // inside of an async function you can use await
  await // ...
}

// in an async context you can await the execution
await querySomething()
```

### With return value

```ts
// Defining an async function always returns a "promise" that "resolves" with the return value
async function fetchSomething(): Promise<String> {
  await // ...
  return "data"
}

let result = await fetchSomething()
```

```swift
// Defining an async function can be marked to return a value of eg. `String`
func fetchSomething() async -> String {
  await // ...
  return "data"
}

let result = await fetchSomething()
```

## Try / catch

```ts
// Any function _could_ throw, in TS this is not marked via syntax
async function querySomethingMightThrow(): Promise<void> {
  await // ...
}

// await and capture errors with try/catch
try {
  await querySomethingMightThrow()
} catch (error) {
  console.error(error)
}
```

```swift
// A function can only throw if explicitly marked with "throws"
func querySomethingMightThrow() async throws -> Void {
  await // ...
}

// await and capture errors with do/try/catch
do {
  try await querySomethingMightThrow()
} catch {
  print(error)
}
```

## Then / catch

```ts
promise
  .then((value) => { /** handle resolved value  */ })
  .catch((error) => { /** handle error message  */ })
```

```swift
// This doesn't really exist in Swift, use try/catch instead
```

## Capturing promises

### Without return value

```ts
// Capture the promise in a variable to await later
const promise = querySomething()
// ...
await promise
```

```swift
// an `async let` instance is similar to a TS `Promise` instance
// it's used for capturing a single async operation to await later
async let querying = querySomething()
// ...
await querying

// OR
// a `Task` instance is similar to a TS `Promise` instance
// you can do multiple async operations within the `Task` body
let task = Task { await querySomething() }
// ...
await task.value
```

### With return value

```ts
// Capture the promise in a variable to await later
const promise = fetchSomething()
// ...
let result = await promise
```

```swift
// Capture an async let to await later
async let fetching = fetchSomething()
// ...
let result = await fetching

// OR
// Wrap in a Task to await later
let task = Task { await fetchSomething() }
// ...
let result = await task.value
```

## Async IIFE

### Creating an async context

```ts
// Without a "top-level await" feature, create an async IIFE to create an async context in which you can await
(async () => {
  await fetchSomething()
})()
```

```swift
// create a Task to create an async context in which you can await
Task {
  await fetchSomething()
}
```

### Capturing the result

```ts
const promise = (async () => {
  // return something from the async IIFE
  return await fetchSomething()
})()

const result = await promise
```

```swift
let task = Task {
  // return something from the Task
  return await fetchSomething()
}

let result = await task.value
```

### Shorter syntax with ()

```ts
const result = await (async () => {
  return await fetchSomething()
})()
```

```swift
let result = await (Task {
  return await fetchSomething()
}).value
```

## Awaiting a Timeout

```ts
await new Promise<void>((resolve) => setTimeout(resolve, 1_000))
```

```swift
try? await Task.sleep(for: .milliseconds(1_000))
```

## Promise.allSettled

### Awaiting a couple in parallel

```ts
const promise1 = querySomething("a")
const promise2 = querySomething("b")
const promise3 = querySomething("c")

// `Promise.allSettled` will await all executions in parallel (and doesn't throw)
await Promise.allSettled([promise1, promise2, promise3])
```

```swift
async let task1 = querySomething("a")
async let task2 = querySomething("b")
async let task3 = querySomething("c")

// a tuple of `async let` will await all executions in parallel
await (task1, task2, task3)
```

### Awaiting an array in parallel

```ts
const ids = ["a", "b", "c", /* ... */]

// `Promise.allSettled` will await all executions in parallel (and doesn't throw)
const promises = ids.map(async (id) => await querySomething(id))

await Promise.allSettled(promises)
```

```swift
let ids = ["a", "b", "c", /* ... */]

// `withTaskGroup` will await all executions in parallel
await withTaskGroup(of: Void.self) { taskGroup in
  for id in ids {
    taskGroup.addTask { await querySomething(id) }
  }
}

// passing `of: Void.self` means we don't return any values from the taskGroup
// (see next example for how to return values from a taskGroup)
```

## Promise.all

### Awaiting a couple in parallel

```ts
const promise1 = fetchSomething("a")
const promise2 = fetchSomething("b")
const promise3 = fetchSomething("c")

try {
  // `Promise.all` will stop execution of all promises once one fails, rejects with the first error
  const [value1, value2, value3] = await Promise.all([ promise1, promise2, promise3 ])
} catch (error) {
  // first found error
}
```

```swift
async let task1 = fetchSomethingMightThrow("a")
async let task2 = fetchSomethingMightThrow("b")
async let task3 = fetchSomethingMightThrow("c")

do {
  // a tuple of `async let` will await all executions regardless if they throw or not, later it will throw the first error found
  let (value1, value2, value3) = try await (task1, task2, task3)
} catch {
  // first found error
}
```

### Awaiting an array in parallel

```ts
const ids = ["a", "b", "c", /* ... */]
const promises = ids.map(async (id) => await fetchSomething(id))

try {
  // `Promise.all` will stop execution of all promises once one fails, rejects with the first error
  const promises = Promise.all(promises)
  const values = await promises
  console.log(values)
} catch (error) {
  // first found error
}
```

```swift
let ids = ["a", "b", "c", /* ... */]

do {
  // `withThrowingTaskGroup` might await execution of all tasks depending when one of them threw
  //      (eg. a network request in progress might still complete when another task threw during it)
  // `withThrowingTaskGroup` throws the first error found
  //      (because of parralel execution we don't know which one)
  async let tasks = withThrowingTaskGroup(
    // define the type of whatever you return in `addTask`
    of: (Int, String).self
  ) { taskGroup in
    // prepare the results array with the same length as the number of tasks
    var results: [String] = Array(repeating: "", count: ids.count)
    
    // Use `.enumerated()` to grab both the index and the ID
    for (index, id) in ids.enumerated() {
      // these run in parallel, so we must return the index to keep track of the order
      taskGroup.addTask { try (index, await fetchSomethingMightThrow(id)) }
    }
    // must use `for try await ... in` here
    // even though this is a loop, these awaits run in parallel
    for try await (index, result) in taskGroup {
      results[index] = result
    }
    return results
  }
  
  let values = try await tasks
  print(values)
} catch {
  // first found error
}
```

<!-- ### Promise.allSettled — fixed length

```ts
// `Promise.allSettled` will await all executions and never throws. It returns an array of results with status
// make an array with a couple of promises you can await in parallel with `Promise.allSettled`
const promises = [
  fetchSomething("a"),
  fetchSomething("b"),
  fetchSomething("c")
]
// Will wait for all promises to resolve or reject, returns an array of results
// `Promise.allSettled` never throws
const results = await Promise.allSettled<string>(promises)
// ↳ ({ status: "fulfilled", value: any } | { status: "rejected", reason: any })[]

// filter just the values
const values: string[] = results
  .filter((result) => result.status === "fulfilled")
  .map((result) => result.value)
// filter just the errors
const errors: unknown[] = results
  .filter((result) => result.status === "rejected")
  .map((result) => result.reason)
```

```swift
// capture several `async let` to await in parallel later
async let fetching1 = fetchSomething("a")
async let fetching2 = fetchSomething("b")
async let fetching3 = fetchSomething("c")

// filter just the values
let values: String[] = []
// filter just the errors
let errors: Any[] = []

// all three async let below are awaited in parallel
do { values.append(try await fetching1) } catch { errors.append(error) }
do { values.append(try await fetching2) } catch { errors.append(error) }
do { values.append(try await fetching3) } catch { errors.append(error) }

// also see `withTaskGroup` and `withThrowingTaskGroup` in the other examples
```

### Promise.allSettled — dynamic length

```ts
// `Promise.allSettled` will await all executions and never throws. It returns an array of results with status
const ids = ["a", "b", "c", /* ... */]
const promises = ids.map(async (id) => await fetchSomething(id))

const results = await Promise.allSettled(promises)
// ↳ ({ status: "fulfilled", value: any } | { status: "rejected", reason: any })[]

const values = results
  .filter((result) => result.status === "fulfilled")
  .map((result) => result.value)
const errors = results
  .filter((result) => result.status === "rejected")
  .map((result) => result.reason)
```

```swift
// `withTaskGroup` will await all executions and not expect any of them to throw
let ids = ["a", "b", "c", /* ... */]
let results = await withTaskGroup(
  // the type of whatever you return in `addTask`
  of: (Int, String?, Error?).self
) { taskGroup in
  var resultTuples: [(String?, Error?)] = Array(repeating: (nil, nil), count: ids.count)
  for (index, id) in ids.enumerated() {
    taskGroup.addTask {
      do {
        let value = try await fetchSomething(id)
        return (index, value, nil)
      } catch {
        return (index, nil, error)
      }
    }
  }
  // must use `for await ... in` here (without `try`)
  // even though this is a loop, these awaits run in parallel
  for await (index, value, error) in taskGroup {
    resultTuples[index] = (value, error)
  }
  return resultTuples
}

let values = results.compactMap { value, _ in value }
let errors = results.compactMap { _, error in error }
``` -->

## Manual resolving / rejecting

```ts
// return a `Promise` from a function to manually resolve or reject
function asyncFunction(): Promise<void> {
  return new Promise((resolve, reject) => {
    // resolve the promise
    resolve("resolved value")
    // OR
    // reject the promise
    reject("error message")
  })
}
```

```swift
enum CustomError: Error { case errorCase }

// return `withCheckedThrowingContinuation` from a function to manually return or throw
func asyncFunction() async throws {
  try await withCheckedThrowingContinuation { continuation in
    // resume the continuation and return
    continuation.resume(returning: "resolved value")
    // OR
    // resume the continuation and throw
    continuation.resume(throwing: CustomError.errorCase)
  }
}
```

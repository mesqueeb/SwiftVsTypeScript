# Async Await

## Promise Instantiation

```ts
// create a one-off promise
const promise = new Promise<string>((resolve, reject) => {
  // resolve the promise
  resolve("resolved value")
  // OR
  // reject the promise
  reject("error message")
})

// return a promise from a function to manually resolve or reject
function asyncFunction1(): Promise<void> {
  return new Promise((resolve, reject) => {/* ... */})
}

// an async function allows await usage and returns a promise implicitly
async function asyncFunction2(): Promise<void> {
  await /* ... */
}
```

```swift
enum CustomError: Error { case errorCase }

// create an async let
async let value = withCheckedThrowingContinuation { continuation in
  // resume the continuation and return
  continuation.resume(returning: "resolved value")
  // OR
  // resume the continuation and throw
  continuation.resume(throwing: CustomError.errorCase)
}

// return withCheckedThrowingContinuation from a function to manually return or throw
func asyncFunction1() async throws {
  try await withCheckedThrowingContinuation { continuation in /* ... */ }
}

// an async function allows await usage
func asyncFunction2() async {
  await /* ... */
}
```

## Single Promises

### await a promise

```ts
const promise = fetchSomething()
// ...
const value = await promise
value // the resolved value
```

```swift
async let value = fetchSomething()
// ...
await value
value // the resolved value

// OR create a Task
// a `Task` instance is similar to a TS `Promise` instance
let task = Task { await fetchSomething() }
// ...
let value = await task.value
value // the resolved value
```

### await timeout

```ts
await new Promise<void>((resolve) => setTimeout(resolve, 1_000))
```

```swift
try await Task.sleep(for: .milliseconds(1_000))
```

### try / catch

```ts
try {
  const value = await fetchSomething()
  // handle resolved value
} catch (error) {
  // handle error message
}
```

```swift
do {
  let value = try await somethingAsync()
  // handle resolved value
} catch {
  // handle error
}
```

### then / catch

```ts
promise
  .then((value) => { /** handle resolved value  */ })
  .catch((error) => { /** handle error message  */ })
```

```swift
// No equivalent, use do/try/catch instead (see above)
```

## Parallel Promises

### Promise.all — fixed length

```ts
// TS's `Promise.all` will stop execution of all promises once one fails, rejects with the first error
const promises = [
  fetchSomething("a"),
  fetchSomething("b"),
  fetchSomething("c")
]
try {
  const [value1, value2, value3] = await Promise.all(promises)
} catch (error) {
  // first found error
}
```

```swift
// use `async let`
// Awaiting a tuple of `async let` will await all executions regardless if they throw or not, later it will throw the first error found
async let task1 = fetchSomething("a")
async let task2 = fetchSomething("b")
async let task3 = fetchSomething("c")

do {
  let (value1, value2, value3) = try await (task1, task2, task3)
} catch {
  // first found error
}
```

### Promise.all — dynamic length

```ts
// TS's `Promise.all` will stop execution of all promises once one fails, rejects with the first error
const ids = ["a", "b", "c", /* ... */]
const promises = ids.map(async (id) => await fetchSomething(id))
try {
  const values = await Promise.all(promises)
} catch (error) {
  // first found error
}
```

```swift
// use `withThrowingTaskGroup`
// Awaiting `withThrowingTaskGroup` will stop execution of all tasks once one task throws, and throw that error
do {
  let ids = ["a", "b", "c", /* ... */]
  let values = try await withThrowingTaskGroup(
    // the type of whatever you return in `addTask`
    of: (Int, String).self
  ) { taskGroup in
    var results: [String] = Array(repeating: "", count: ids.count)
    for (index, id) in ids.enumerated() {
      taskGroup.addTask { try (index, await fetchSomething(id)) }
    }
    // must use `for try await ... in` here
    // even though this is a loop, these awaits run in parallel
    for try await (index, result) in taskGroup {
      results[index] = result
    }
    return results
  }
} catch {
  // first found error
}
```

### Promise.allSettled — fixed length

```ts
const promises = [
  fetchSomething("a"),
  fetchSomething("b"),
  fetchSomething("c")
]
// Will wait for all promises to resolve or reject, returns an array of results
// `Promise.allSettled` never throws
const results = await Promise.allSettled(promises)
// ↳ ({ status: 'fulfilled', value: any } | { status: 'rejected', reason: any })[]

const [value1, value2, value3] = results
  .map((result) => result.status === "fulfilled" ? result.value : undefined)
const [error1, error2, error3] = results
  .map((result) => result.status === "rejected" ? result.reason : undefined)
```

```swift
async let task1 = fetchSomething("a")
async let task2 = fetchSomething("b")
async let task3 = fetchSomething("c")
// all three tasks below are awaited in parallel
do {
  let value1 = try await task1
} catch {
  let error1 = error
}
do {
  let value2 = try await task2
} catch {
  let error2 = error
}
do {
  let value3 = try await task3
} catch {
  let error3 = error
}
```

### Promise.allSettled — dynamic length

```ts
const ids = ["a", "b", "c", /* ... */]
const promises = ids.map(async (id) => await fetchSomething(id))

const results = await Promise.allSettled(promises)
// ↳ ({ status: 'fulfilled', value: any } | { status: 'rejected', reason: any })[]

const values = results
  .filter((result) => result.status === "fulfilled")
  .map((result) => result.value)
const errors = results
  .filter((result) => result.status === "rejected")
  .map((result) => result.reason)
```

```swift
// use `withTaskGroup`
// Awaiting `withTaskGroup` will await all executions and not expect any of them to throw
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
```

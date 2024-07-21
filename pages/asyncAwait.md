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

## await a promise

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

## await timeout

```ts
await new Promise<void>((resolve) => setTimeout(resolve, 1_000))
```

```swift
try await Task.sleep(for: .milliseconds(1_000))
```

## try / catch

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

## then / catch

```ts
promise
	.then((value) => { /** handle resolved value  */ })
	.catch((error) => { /** handle error message  */ })
```

```swift
// No equivalent, use do/try/catch instead (see above)
```

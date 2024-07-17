# Promises

## Instantiation

```ts
// create a one-off promise
const promise = new Promise<string>((resolve, reject) => {
	// resolve the promise
	resolve("resolved value")
	// or reject the promise
	reject("error message")
})

// return a promise from a function
function asyncFunction1(): Promise<void> {
	return new Promise((resolve, reject) => {/* ... */})
}

// an async function returns a promise implicitly
async function asyncFunction2(): Promise<void> {
	await /* ... */
}
```

```swift
enum ErrorEnum: Error { case errorCase }

// create a one-off task
// a `Task` instance is similar to a TS `Promise` instance.
let task = Task {
	// in Swift any async function needs to be awaited:
	try await withCheckedThrowingContinuation { continuation in
		// resolve the continuation
		continuation.resume(returning: "resolved value")
		// or reject the continuation
		continuation.resume(throwing: ErrorEnum.errorCase)
  }
}

// an async function with manual continuation
func asyncFunction1() async throws {
	try await withCheckedThrowingContinuation { continuation in /* ... */ }
}

// an async function
func asyncFunction2() async {
	await /* ... */
}
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
	const promise = new Promise(/* ... */)
	const value = await promise
	// handle resolved value
} catch (error) {
	// handle error message
}
```

```swift
do {
	let task = Task { /* ... */ }
	let value = try await task.value
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

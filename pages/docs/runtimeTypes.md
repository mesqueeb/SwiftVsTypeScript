# Runtime Types

In TypeScript, types are primarily a development-time tool. Once your code is transpiled to JavaScript, the type information disappears, and the program runs without considering the types you used.

In Swift, types play a significant role at both compile time **and runtime**. Types influence not just how your code is compiled, but also how it behaves when executed.

Below is a comparison table to highlight how Swift and TypeScript handle types at runtime:

| Concept                           | Swift                                                                                                       | TS / JS                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Memory management based on types  | ✅ Allocates memory based on type information during runtime                                                | ❌ Memory is managed by JS's dynamic runtime, unrelated to TS types                         |
| Runtime type casting and checking | ✅ Uses `as?`, `as!`, `is` to check and cast types in conditions [¹](#_1-runtime-type-casting-and-checking) | ⚠️ JS's `instanceof` checks prototype chain, not TS-specific types                          |
| Runtime Generics                  | ✅ Generics are resolved to concrete types, dynamically passed at runtime [²](#_2-runtime-generics)         | ❌ Generics are erased during transpilation, not available at runtime                       |
| Protocol conformance checking     | ✅ Check if types conform to protocols dynamically using `is` [³](#_3-protocol-conformance-checking)        | ❌ No runtime support for checking interface conformance                                    |
| Optional types and null safety    | ✅ Swift enforces runtime safety with `Optional` and `nil` [⁴](#_4-optional-types-and-null-safety)          | ❌ Optional values are a TS compile-time feature, JS handles `null`/`undefined` dynamically |

## 1. Runtime type casting and checking

In Swift, you can use `as?` for safe casting, `as!` for forced casting, and `is` for checking types at runtime within conditional statements. This is different from TS's `as` keyword, which is purely compile-time and doesn’t perform any runtime checks.

**Swift Example:**

```swift
let someArray: Any = [1, 2, 3]

if someArray as? [Int] != nil {
    print("It's an array of Int")
} else {
    print("Not an array of Int")
}
```

## 2. Runtime Generics

In Swift, generics are not just a compile-time feature. Swift retains type information for generics at runtime, allowing you to pass concrete types dynamically to functions or classes.

**Swift Example:**

```swift
func createArray<T>(count: Int) -> [T] {
  if T.self == Int.self {
    return Array(repeating: 0 as! T, count: count)
  } else if T.self == String.self {
    return Array(repeating: "" as! T, count: count)
  } else {
    fatalError("Unsupported type")
  }
}

let intArray = createArray<Int>(count: 3)        // [0, 0, 0]
let stringArray = createArray<String>(count: 3)  // ["", "", ""]
```

## 3. Protocol conformance checking

In Swift, you can dynamically check if an instance conforms to a protocol using the `is` keyword. This isn’t possible with TS interfaces, as they don’t exist at runtime.

**Swift Example:**

```swift
protocol Barkable {
  func bark()
}

class Dog: Barkable {
  func bark() { print("Woof!") }
}

class Wolf: Barkable {
  func bark() { print("Awoooo!") }
}

class Cat {
  func meow() { print("Meow!") }
}

let animals: [Any] = [Dog(), Wolf(), Cat()]

for animal in animals {
  if animal is Barkable {
    print("This animal can bark")
  } else {
    print("This animal cannot bark")
  }
}
```

## 4. Optional types and null safety

In Swift if you try to force unwrap a nil value, Swift will throw a runtime error, unlike TypeScript/JavaScript, which would handle this more loosely and return something like `NaN` in certain situations.

**Swift Example:**

```swift
let nums: [Int] = []

let first = nums[0]!  // Runtime error: Index out of range — program stops execution
let result = first + 10  // Swift doesn't execute this line (JavaScript would return `NaN` here)
```

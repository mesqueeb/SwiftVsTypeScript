# Math

## Min / Max

```ts
Math.min(1, 2, 3) // 1
Math.max(1, 2, 3) // 3

Math.min(...[1, 2, 3]) // 1
Math.max(...[1, 2, 3]) // 3
```

```swift
min(1, 2, 3) // 1
max(1, 2, 3) // 3

[1, 2, 3].min() // 1
[1, 2, 3].max() // 3
```

## Floating point arithmetic

Both languages need care with floating point arithmetic:

```ts
100 * 1.1 // 110.00000000000001
Math.floor(100 * 1.1) // 110
```

```swift
100 * 1.1 // 110.00000000000001
floor(100 * 1.1) // 110
```

## Others

```ts
Math.random() // 0.123...
Math.floor(1.5) // 1
Math.ceil(1.5) // 2
Math.round(1.5) // 2
Math.abs(-5) // 5
Math.sqrt(16) // 4
Math.pow(2, 3) // 8
Math.log(10) // 2.302...
Math.exp(2) // 7.389...
Math.sin(Math.PI / 2) // 1
Math.cos(0) // 1
Math.tan(Math.PI / 4) // 0.999...
Math.asin(1) // 1.570...
Math.acos(0) // 1.570...
Math.atan(1) // 0.785...
Math.atan2(1, 1) // 0.785...
Math.log10(100) // 2
Math.sign(-5) // -1
Math.trunc(1.9) // 1
Math.hypot(3, 4) // 5
Math.cbrt(27) // 3
```

```swift
Double.random(in: 0 ... 1)  // 0.123...
floor(1.5)  // 1.0
ceil(1.5)  // 2.0
round(1.5)  // 2.0
abs(-5)  // 5
sqrt(16)  // 4.0
pow(2, 3)  // 8
log(Double(10))  // 2.302...
exp(Double(2))  // 7.389...
sin(Double.pi / 2)  // 1.0
cos(Double(0))  // 1.0
tan(Double.pi / 4)  // 0.999...
asin(Double(1))  // 1.570...
acos(Double(0))  // 1.570...
atan(Double(1))  // 0.785...
atan2(Double(1), Double(1))  // 0.785...
log10(Double(100))  // 2.0
Double(-5).sign  // minus
trunc(Double(1.9))  // 1.0
hypot(Double(3), Double(4))  // 5.0
cbrt(Double(27))  // 3.0000000000000004
```

# Math

## Min / Max

```ts
Math.min(...[1, 2, 3]) // 1
Math.max(...[1, 2, 3]) // 3
Math.min(1, 2, 3) // 1
Math.max(1, 2, 3) // 3
```

```swift
[1, 2, 3].min() // 1
[1, 2, 3].max() // 3
min(1, 2, 3) // 1
max(1, 2, 3) // 3
```

## Floating point arithmetic

Both languages need care with floating point arithmetic:

```ts
// be careful with floating point arithmetic
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
Math.tan(Math.PI / 4) // 1
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
Double.random(in: 0...1) // 0.123...
floor(1.5) // 1
ceil(1.5) // 2
round(1.5) // 2
abs(-5) // 5
sqrt(16) // 4
pow(2, 3) // 8
log(10) // 2.302...
exp(2) // 7.389...
sin(Double.pi / 2) // 1
cos(0) // 1
tan(Double.pi / 4) // 1
asin(1) // 1.570...
acos(0) // 1.570...
atan(1) // 0.785...
atan2(1, 1) // 0.785...
log10(100) // 2
sign(-5) // -1
trunc(1.9) // 1
hypot(3, 4) // 5
cbrt(27) // 3
```

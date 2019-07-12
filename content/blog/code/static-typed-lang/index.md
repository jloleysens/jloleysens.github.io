---
title: On Statically Typed Languages.
date: '2019-05-11T14:16:30.130Z'
---

# Introduction

I have been using TypeScript (TS), a _superset of JavaScript_ (JS), for
roughly a year and half and have learned, the hard way, what the strengths
and weaknesses are of a statically typed language.

# Dynamic vs. Static

# Bugs make me feel fine

# Degrees

# A Note on Optimization

A language such as Haskell relies heavily on it's type checking system. So much so that
it can help developers detect specific cases not covered by logic they have written at compile-time
and possibly before. The idea being that come execution time your code should not contain
any type-related bugs. Given a file named `main.h`:

```haskell
fizz :: Int -> String
fizz n | n `mod` 15 == 0  = "FizzBuzz"
       | n `mod` 3  == 0  = "Fizz"
       | n `mod` 5  == 0  = "Buzz"
       -- | otherwise = show n

main :: IO()
main = mapM_ putStrLn $ map fizz [1..100]
```

Will result in:
```
*** Exception: main.hs:(2,1)-(4,34): Non-exhaustive patterns in function fizz
```
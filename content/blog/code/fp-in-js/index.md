---
title: (Don't) write FP in JS
date: '2020-06-01T10:56:41.195Z'
---

## Write FP in JS

I enjoy the teachings and precepts of Functional Programming (FP). I enjoy the
simplicity of it. It tends to force you to think of one thing at a time. A
quote that unlocked the power of FP for me is by Alan J. Perlis, as stated in
Clojure's rationale<sup>1</sup>:

> It is better to have 100 functions operate on one data structure than to have
> 10 functions operate on 10 data structures.

This idea, for me, shook the world of Object Oriented Programming (OOP). OOP
was not rendered without use, but there is certainly something to these
composable units (functions) that understand a shared interface. Something that
makes me hesitate to reach for object inheritance patterns and writing my own
APIs. Interfaces like arrays or lists. These are extremely simple data
structures that know nothing about your business logic. When we start creating
our own functions that operate on arrays and return arrays we quickly gain the
ability to express different sequences of higher-level _operations_ instead of
higher level _things_. See Doug McIlroy's solution to the problem of finding
the frequency of different words in a text file<sup>2</sup>.

All of this is possible in JS - as in many other languages. What
makes it even more pleasant to write in JS is that functions are first-class
values in the same way that objects or numbers are. This means we can write
functions that take functions as arguments -- a pattern that is used
extensively in many applications to solve different problems.

Taking the teachings of FP a step further we can create law-abiding functions.
This is a more extreme version<sup>3</sup> of the idea I stated earlier about shared
interfaces<sup>4</sup>. These laws mean that we can reason about the flow of
our functions in a way that is analagous to mathematic formlae. This also leans
into thinking about our functions a type level; give me a number (a type) and I
will return a string (another type). I will leave further investigations into category
theory to the reader as it is beyond the scope of this article (enjoy
puzzle solving instead of problem solving!).

At this point I would emphasise that all of the above is why we should almost
certainly choose for FP in JS. Why choose complexity (or complectedness) when
simplicity is not only feasible but desirable? This is something FP can
offer. What is more, there are theoretical or academic aspects to what I have
mentioned but an enormous amount of practical usefulness too. JS libraries like
[lodash](https://lodash.com/)<sup>5</sup> and [ramda](https://ramdajs.com/) have
demonstrated this usefulness in many real-world applications.

## Don't write FP in JS

Consider the following reasons you should absolutely not write FP in JS. I
would like to explore two reasons, but in reality they are linked and are utter
defeaters for FP in JS today.

### Tail call optimization (TCO)

The reality is that JS is not a language that is optimised for all things FP.
For instance, FP makes heavy use of calling functions inside of functions.
Sometimes as a mechanism of iteration known as recursion. In a large number of
cases this is fine but in some cases this is totally not fine and will cause
your program to unexpectedly break.

The reason your program will break is due to optimization. More specifically,
lack of FP optimization in how JS is built. This is not something you can code
around. It is woven into the very fabric of what JS _is_ today. JavaScript is
not a compiled<sup>6</sup> or a TCO language. Even though much
work has been done in browsers and other runtimes to mitigate this, in the year
2020 it is still possible to blow the call stack. What does this mean? Well, in
simple terms your program asks for more memory than is available to it because
your implementation does not follow the JS rules™. The stack depth is of finite
size, but the size is dependant upon the machine your JS runtime is running on.
You can not know in all cases how far you are permitted to go. If you choose to
implement this mechanism your code is instantly buggy. **It will break**. Okay, I
have overstated the case slightly, it will break under certain conditions.
If you know that the data over which you are recursing will _never_ grow the
stack beyond, say, 10 levels deep, you are in the clear. When you do not know
how deep the stack may get you are in treachorous waters<sup>7</sup>.

### Immutability (or lack thereof)

Another, and quite pressing reason to not go whole-hog FP in JS is because many
native data structures are not immutable. Consider this code:

```js
const myObject = { a: 1 };

function myFunction(obj) {
  obj.a = 42;
}

myFunction(myObject);

console.log(myObject);
// { a: 42 }

```

For someone who writes code in a language optimized for FP this may be a shock,
but to many others this may not be. The fact is objects, arrays and functions
are passed around as values which can be changed in an in-place way. This means
a change is visible to anyone with a reference to that value. This 
violates the simplicity provided by functional purity. In order fix this we must
explicity copy our values. Like so: 

```js
const myObject = { a: 1 };

function myFunction(obj) {
  const myNewObject = { ...obj, a: 42 };
}

myFunction(myObject);

console.log(myObject);
// { a: 1 }
```

Problem solved! However, the problem is actually not sovled for many cases when
we have objects inside objects inside objects inside arrays. "Luckily" strings
and numbers are immutable. So to preserve the copying behaviour we so happily
acheived before we would need to do this:

```js
const originalObject = { a: { b: { c: [ { d: 1 }, { e: 2} ] } } };
const copyThatChangedD = {
  ...originalObject,
  a: {
    ...originalObject.a,
    b: {
      ...originalObject.a.b,
      c: [ { ...originalObject.a.b.c[0].d, d: 42 }, { ...originalObject.a.b.c[1] } ]
    }
  }
};
```

Immutable facade restored! There are many programmatic implementations that
were made to solve this very problem. But consider the case when we do not
always know how deep our data structure may be. We are back to the problem of
optimization I mentioned before because we will need to recurse! For
larger object structures, we can quickly incur a large performance cost and risk blowing
the stack again.

There are many users of the web out there happily running old Android devices or
other low-memory environments which will not be able to handle the memory
footprint created by forcing native JS structures to be immutable.

## Closing thoughts

There may be other cases where FP in JS is a bad fit, but I have tried to touch
on what I believe to the most problematic areas at present. So do we abandon
the FP in JS project? Definitely not! My advice is to be cautious when
implementing FP in JS. Think carefully about the environment in which your code
will run given the constraints in place. Use mutation to your advantage, it is
a truly powerful tool and your only saving grace for low(er)-memory devices
accessing your website or sending data to your JS server.

Again, do not abandon FP in JS. It is a truly powerful tool that can help
create a simpler code base and it has a truly amazing friend in JS.
Unfortunately there are operational concerns that mean you will need to be a
cautious and pragmatic FP in JS programmer today. Well, actually, always be
pragmatic, please!

### Notes

1. Listed as one of the points
   [here](https://clojure.org/about/rationale#_object_orientation_is_overrated).
2. See [this](https://youtu.be/AkYDsiRVqno?t=875) section (roughly 2 minutes long) of a talk by Stefan
   Tilkov. With special focus on the implementation by Donald Knuth vs Doug McIlroy.
3. Today, at time of writing, I would argue pathologically extreme.
4. See a library like [fp-ts](https://github.com/gcanti/fp-ts).
5. Please do not add this entire library as a dependency in new projects. There
   are many security vulnerabilities that come with it and much of it's
   functionality has since been made available through JS natively.
6. TypeScript is a _transpiler_ not a _compiler_ even though it may perform
   tasks that are similar to a compiler.
7. I have run into this very issue using a library like [immer](https://github.com/immerjs/immer).

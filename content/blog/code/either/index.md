---
title: Errors and Either
---

<br />

Welcome to yet another post on the Internet about Monads! I am only mostly
kidding. I do not intend to use this post as an introduction to
Monads<sup>1</sup>. This post is actually a continuation of [my post on
errors](../errors), and I would like to dig into the practical upshots of
implementing more thorough and efficient means of handling errors.
Specifically I am picking up the sentiment that _we can do better_
and measurably so.

Consider the following diagram:

<figure class="my-figure">
  <a name="fig1">
    <img src="../pics/either/myprogram1.png" alt="My program figure 1" title="My program figure 1">
  </a>
  <figcaption>Figure 1</figcaption>
</figure>

Figure 1 features elements of a typical program; a start point, branch
conditions and terminus points. Real programs could be expressed as sets of
these diagrams linked together, one's output the input of the next. Our
branching here is focused on errors. Each diamond is a point at which we take
an action that _could_ result in an error condition. The `s` branch indicates
a successful result where the `e` branch indicates an unsuccessful result.
This is the error _control-flow_ inherent in any program that could have
error conditions.

The different terminus nodes indicate different end states that our program
can reach. Each end state indicates a different output. This toy program has
four different potential terminus states. We can imagine that if this program
grew to any level of complexity we would see an explosion of terminus states
emerging as we introduce new points of error.

Moreover, a terminus state represents the end of the programmers _intent_. It
is saying "We have reached this point without generating the outcome we had
hoped, so send a message back _expressing this unexpected event_".

Programming in this way may sound like an ungracious description of how many
programs work, but practice is often not far off from this. Consider this
JavaScript:

```javascript
let locked = false;
const lockSomeResource = () => {
  locked = true;
};
const unlockSomeResource = () => {
  locked = false;
};

const doSomethingDangerous = () => {
  throw new Error('You got burned!');
};

try {
  lockSomeResource();
  doSomethingDangerous();
} catch (e) {
  console.error(e);
} finally {
  unlockSomeResource();
}
```

This code is a representation of one of the diamonds in [Figure 1](./#fig1).
Clearly we will reach the `e` branch. And log the error to the browser
console. But consider what might happen if unlocking the resource is a known
potential point of error too. To achieve our goal of improved error messages
we might make the following alterations:

```javascript
let locked = false;
const lockSomeResource = () => {
  locked = true;
};
const unlockSomeResource = () => {
  throw new Error('Nope!');
};

const doSomethingCoolButDangerous = () => {
  throw new Error('You got burned!');
};

const myFunction1 = () => {
  try {
    lockSomeResource();
    return doSomethingCoolButDangerous();
  } catch (e) {
    console.error(
      `something went wrong with locking the resource or doing something dangerous, either way: ${e}`
    );
    return undefined;
  } finally {
    try {
      unlockSomeResource();
    } catch (e) {
      console.error(`could not unlock the resource because: ${e}`);
    }
  }
};

myFunction1();
```

The snippet above is a representation of a path in [Figure 1](./#fig1) where
we reach two, successive error conditions. Nested try-catch blocks may seem
like overkill but they are the only way to ensure that our error states are
kept in check. We can continue to flesh out this example and perhaps refactor
our code so that each potentially dangerous call is inside of it's own
try-catch block, we may even be tempted to provide a more generic way of
provisioning these try-catch-finally blocks for functions (at our own
expense). The potential danger of swallowing errors is creating programs that
_do not correctly "break" when they should_. Another point to notice here
is that we have assumed `myFunction1` should return something to the caller.
Either it is the result of `doSomethingCoolButDangerous` or it is `undefined`
-- which is our implicit way of communicating that something went wrong,
let's say we made this part of our contract to calling code. This is
how a lot of programs operate. I would like to assert we can do
better than this, and write less code with less nesting. Consider this
revision to our graph:

<figure class="my-figure">
  <a name="fig2">
    <img src="../pics/either/myprogram2.png" alt="My program figure 2" title="My program figure 2">
  </a>
  <figcaption>Figure 2</figcaption>
</figure>

In the figure above we have eliminated all terminus points but one. In fact,
the diamonds have been made _totally irrelevant_ to the output of our
program. I would like to demonstrate that this is what the `Either` Monad
enables us to do. All roads lead to one output, no matter what happens and
that output is called `Either`. `Either` can be considered an abstract way
of expressing uncertainty in our programs and so it is a very general data
type. Only slightly less general than the Monad of which it is one, more
specific, _kind_<sup>2</sup>.

### Notes

1. The [Mostly adequate guide](https://github.com/MostlyAdequate/mostly-adequate-guide) does an excellent
   job of getting hands on with Monads and I would highly recommend checking it out.
2. See the [fantasy land specification](https://github.com/fantasyland/fantasy-land#fantasy-land-specification)
   for where Monads fit in with other general data types. `Maybe` is a similar instance to `Either` but it uses different tags.

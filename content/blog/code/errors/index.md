---
title: Errors
---

<br/>

Program errors are intended to express unexpected events during the carrying out of a set of instructions.
An _unexpected event_ may sound like a rare special occurrence that requires extraordinary measures, but
in programming errors are far from rare and, as I hope to argue, should also be as far from special
as possible.

To a computer, at the lowest level, an instruction could be take these binary values (inputs), perform a
logical operation, and generate a new binary value (output). In this idealised model there is not really
much unexpected that could happen -- other than the power socket being yanked out. However, this level
of instruction is not under consideration for day to day programming. It is too low level. Advances in
the field of hardware and software have enable programmers to combine over hundreds of thousands of these
lower level instructions. We have created and _layered_ concepts over _patterns_ which has lead to an onion-like model
of layers upon layers. This pattern itself is called _abstraction_ and is a very powerful idea in Computer Science.
Travelling up from the lowest layer of the onion we arrive at the text we read and write. Let's call this
the _text representation_ of our program. It is one description of the program, and it happens to the be
one that programmers interact with the most, so also where our creative problem solving efforts are
implemented for the problem we are (hopefully) solving.

Where does this leave errors? Sometimes wedged between the edges of the layers of abstraction -- a message
to a lower level lost in translation or misinterpreted. This class of error can either be very simple to fix,
just use the expected method for passing a message down, or it can be deadly serious, in which case our
_text representation_ is on very shaky ground<sup>1</sup>. A far more common class of unexpected events
arises from the combination of statefulness, our _text representation_ and cognitive limitations. I don't
want to belabour the point of _how_ these errors arise, others have done a far better job of this than
I could hope to<sup>2</sup>. What I would like to discuss is the role of errors themselves in the context
of our programs and specifically, the control-flow of our programs.

We started by stating that errors are intended to _express_ an unexpected event. The question is, at whom
is the _expression_ aimed? Typically other humans, or if you have spent enough time programming you will have
run into errors of your own making. Let's consider this JavaScript `TypeError` error:

```javascript
let a = 1;
a.b();
console.log('we never get here');
```

When run in the browser the above program generates the following output:

```text
Uncaught TypeError: a.b is not a function
    at <anonymous>:1:3
```

At the time of writing, `b` is not the name of a method that exists on the JavaScript number object and so
calling it get us into an error condition. This indicates something else too; errors exist only at runtime<sup>3</sup>.
At _runtime_ practically means that for all the different environments and states that your program may
run in, possible error conditions will only reveal themselves at the latest possible moment, long
after you, and your colleagues, have considered the code complete and correct. This means, end users are
often the ones who read the contents of error messages. Consider also the contents in this case `TypeError: a.b is not a function`.
In this instance, the fix for this error is clear, just don't call a non-existent function! But this toy example is a far cry from a program doing something
useful (and usually non-trivial and _stateful_). The final thing to notice is that _errors impact control flow_. The log
statement is _never_ reached -- you can run this program until the heat death of the universe and the
statement "we never get here" will never be output to the browser console.

One response to this scary world of errors at runtime is using built-in error containment mechanisms. In
JavaScript this may look like:

```javascript
try {
  let a = 1;
  a.b();
  console.log('we never get here');
} catch (e) {
  console.log('but we do get here');
}
```

Running this program greets us with:

```text
but we do get here
```

Control flow, once again, is impacted, but something else has happened too. The description of the error has
vanished -- hiding errors is probably worse than not handling them! Even if we were to write more code for extracting information from the `e` variable created in the
`catch` clause what we are we left with, at worst, is just the same description of `Uncaught TypeError: a.b is not a function`.
Given the number of text combinations that could express an error it is not feasible to build a self-healing
program by just analyzing text descriptions of errors. There is one more avenue open to us: we can detect
that _type_ of the error, in this case: `TypeError`. Altering our program again, we wind up with the following:

```javascript
try {
  let a = 1;
  a.b();
  console.log('we never get here');
} catch (e) {
  console.log('but we do get here');
  if (e instanceof TypeError) {
    console.log('also, we get here');
  }
}
```

Now we have a way to surface clearer messages to our users, our colleagues and our future selves! Additionally,
this approach lends itself very well to an inheritance model of errors. As it happens, `TypeError` is also an instance
of `Error`, so `e` would test true for both of those. An analogous approach exists in other programming languages.
This seems to bring a us a long way. By simply extending the built in `Error` class we can create our own
special family of sub-classes of errors. Problem solved!

However we never asked whether passing error messages using an inheritance model was appropriate. Consider again
the opening statement, if errors are meant to express an unexpected event, is it useful to know that this
error instance is also an instance of a parent _type_ of error? How many levels of inheritance do we realistically
need? This added mechanism of extension also creates an explosion of code if we are serious about thoroughly
handling _all_ of the different error cases in our code. Bringing errors closer to a model of messaging passing
will aid us in keeping things simple while still being able to effectively express the nature of an unexpected
event. Consider this alteration:

```javascript
// Simple, generic error management machinery
const SPECIFIC_ERROR = 'SPECIFIC_ERROR';
const errorCreator = code => () => new Error(code);
const createSpecificError = errorCreator(SPECIFIC_ERROR);

try {
  let a = 1;
  a.b();
  console.log('we never get here');
} catch (e) {
  console.log('but we do get here');
  if (e instanceof TypeError) {
    console.log('also, we get here');
    throw createSpecificError();
  }
}
```

We are still using an `instanceof` check in combination with information we think is useful for other humans
that may trigger this case. This gives us economy in the machinery we use, we only need to document very
specific, unique error codes and we are much closer to building a system of error handling that can generate
more helpful information. But we can do better still -- I intend to discuss `Either`<sup>5</sup> in a following
post.

To conclude, The best possible scenario I could imagine is one in which lower level errors are all handled and converted
into something humans can easily interpret and take appropriate action on. This proposition fits better with the mental
model of message passing than it does special events or extraordinary measures. The more "normal" we make
errors in the domain of programming the more naturally they can form part of our initial considerations<sup>5</sup>.
Do not shy away from thinking about conceivable error states, and then do not shy away from confronting
error states you may not be able to conceive of given current information.

### Notes

1. This can also be considered the price of abstraction, because we are far removed from what is _actually_
   happening, if any layer below is unreliable, we are unreliable.
2. For instance [Out of the Tarpit](http://curtclifton.net/papers/MoseleyMarks06a.pdf) is a fantastic article
   on the pitfalls of carelessly managing state.
3. Other, compiled languages, would never have generated a program that would allow an error like this, but
   I am putting this consideration aside because they can still allow analogous errors to occur; albeit
   hidden amidst a lot more text usually.
4. Consider checking out [fp-ts](https://gcanti.github.io/fp-ts/) very cool TypeScript implementations of common abstract data structures.
5. Monads are one response to forcing us to engage with the possibility that many parts of our program can
   create "unexpected" results.

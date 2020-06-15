---
title: The most important thing a programmer does
date: '2020-06-15T14:31:39.436Z'
---

In JavaScript there are so many different technologies to learn and become
proficient with. Each introducing its own mental model and best practices.
This spans databases all the way to user experience (UX) concerns. For some of
these technologies understanding the operational concerns involved is a
non-trivial learning curve in itself. For instance, properly configuring a
database for your application is of vital importance for any serious web
application. The structuring but also the scaling of the database. Granted, the
advent of cloud in the early 2010s has made a lot of these operational concerns
easier to get started with however they have a silent cost of abstracting away
many details that can cause major issues or headaches in specific instances -
you may risk running an excessively large bill to the cloud providers
delight!

The point of this post is to say that none of these things are _actually_ important
for the programmer. Or at least not of the highest import. Understanding
different technologies can be substituted with understanding different
models and techniques and what _algorithms_ these different methods and
techniques make feasible or infeasible. The most important role of
the programmer by my estimation is that of algorithmist. The individual
who cares most about what sequential steps are taken to solve a problem is
predisposed to a vital part of programming. This individual cares at a low-level
about the order of execution.

Take the example of a shopping cart. You can add and remove things from the
shopping cart. The shopping cart knows what products it. It also knows that
if it has two of the same product it should not display two of the same product
but rather a count of the number of items of that particular product.

Think about how you might add something to a cart like this.

Now think about how you might remove something from a cart like this.

Clearly there are some concerns which must be wrestled with in order to create
the correct behaviour. The correct algorithm. Here is my fast and loose, imperative-style, take
on a solution:

```javascript

// A cart containing product objects with id and count: { id: number, count: number } 
const cart = [];

function addToCart(productToAdd) {
  for (const product of cart) {
    if (product.id === productToAdd.id) {
      // In JS ++ before the variable produces a different algorithm to
      // ++ after the variable. Not of great import here however.
      ++product.count;
      return;
    }
  }
  cart.push({ ...productToAdd, count: 1 });
}

function removeFromCart(productToRemove) {
  for (let idx = 0; idx < cart.length; ++idx) {
    const product = cart[idx];
    if (product.id === productToRemove.id) {
      // Here our unary first changes the algorithm
      if (--product.count < 1) {
        cart.splice(idx, 1);
      }
      return;
    }
  }
}


```

I'd challenge the reader to consider how an algorithm might be written that
cannot work by mutation as many languages require and certain patterns in
JavaScript like flux.

I intended this post as a reminder to myself, more than for others about the biggest, most important role of the programmer. Happy algorithming!

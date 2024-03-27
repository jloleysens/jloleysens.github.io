---
title: Reflecting on `Either` 4 Years Later
date: '2024-03-27T17:05:58.675Z'
---

About 4 years ago I wrote <a href="/code/either">a post</a> about `Either` and its role in error handling. I wanted to revisit this topic. Primarily to say that my conclusion was largely **wrong**. Specifically my critique of this code:

```typescript
const myFunction1 = resource => {
  try {
    const locked = lockSomeResource(resource);
    return doSomethingCoolButDangerous(locked);
  } catch (e) {
    console.error(
      `something went wrong with locking the resource or doing something dangerous, either way: ${e}`
    );
    return undefined;
  } finally {
    try {
      unlockSomeResource(locked);
    } catch (e) {
      console.error(`could not unlock the resource because: ${e}`);
    }
  }
};
```

My initial conclusion was that nested try-catch blocks are a blight on the earth. However, I now know that you are far more likely to encounter code like 👆🏻 in any serious software application's code than _anything_ like this:

```typescript
const myFunction1 = (resource: string) => {
  return pipe(
    either.of(resource),
    map(lockSomeResource),
    mapLeft(() => {
      console.log('this never runs!');
      return {} as any;
    }),
    chain(res =>
      tryCatch(
        () => doSomethingCoolButDangerous(res),
        (e: Error) => ({ e, res })
      )
    ),
    bimap(
      ({ e, res }) =>
        tryCatch(
          () => unlockSomeResource(res),
          (_e: Error) => `Our final result, ${e.message} and ${_e.message}`
        ),
      (res: any) =>
        tryCatch(() => unlockSomeResource(res), () => 'Not our final result')
    ),
    fold(identity, identity)
  );
};
```

And there are several reasons for it:

1. Most useful non-trivial software systems are developed and maintained in collaboration with other developers (a.k.a humans). They will have spent hundreds or thousands of hours reading code that is far closer in presentation to the first snippet than the latter. This means they can understand it, debug it, and contribute to future iterations with confidence.
2. The first snippet is objectively simpler. There are fewer concepts to understand (i.e. accessible for beginners and experts).
3. The second snippet is following strong FP practices. I wrote <a href="/code/fp-in-js/">a post</a> a while ago about why we should avoid strong FP practices in JavaScript.
4. Kind of related to point (1), given that most code fellow humans work on and need to grok will not be in this paradigm it's unlikely that you will have the opportunity to even get code like past review.
5. ...and, yes, least importantly, the first snippet is probably more performant.

So... should I delete my original post? I don't think so.

I think programmers should be curious by nature. Interested in learning about new approaches and their relative strengths and weaknesses. In a predominantly FP codebase it might make perfect sense to adopt the patterns of my second snippet. Additionally, FP has a great friend in JS, in spite of all JS's pitfalls when it comes to the purity that true FP demands (again, see my <a href="/code/fp-in-js/">post</a> about it).

We use high-level programming languages to make our lives easier. They are a sort of local optimum for capturing logic and flexibility for that logic to evolve. It's in our interest to make sure we are leveraging it for the greatest impact. That means: probably **don't** use `Either` in your TypeScript or JavaScript code.
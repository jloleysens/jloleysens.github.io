---
title: TODO
date: '2020-04-26T13:14:52.120Z'
---

I have recently quite enjoyed the use of TODO comments. On one hand, there is
something really off-putting about having TODOs littered across your code
base. Like threads of thought that did not have time to fully develop and are
now dangling appendages of what could have been if only someone had finished
the job at time, but for whatever reason could not.

At their worst, TODOs are certainly things that I would avoid placing in code.
Your collaborators (or your future self) will come across them lacking the
context of your train of thought. In this way a TODO comment will seem like a
compromise (a trade-off for work unfinished) that was made without a clear
rationale. Usually a standard comment is more appropriate and should be used
liberally in cases where code may be in a state that is hard for new readers
to understand.

At their best, TODOs are indicators of future work _placed right in the code_.
It should be very clear to others (and your future self) what it is
that is yet to be done here; the surrounding code _is_ your context. It could
be a brief description of an improvement or a simple indicator that standard
protocol was skipped for the sake of brevity. "Ah", they will say, "clearly a
new in-the-works component will replace this minimally viable one in future.
I am not going to spend time on improvements here". That would be an awesome
outcome for a humble TODO comment. You have saved yourself and someone else
time by placing a clear marker in the code.

Another excellent use of a TODO is when writing front-end code which often
calls for high quality copy that end users will read. In the early stages of
development of a new feature it is not worth spending time on this because your
work is in a state of flux. Figuring out copy while making architecture
decisions is time ill-spent. A simple `TODO: translate` or `TODO: review copy` comment will save you the mental tax of worrying about a separate
concern when all you need is a button in the UI that says: "Do the thing".
The TODO will be especially useful when, in future, someone returns to address
these TODOs and can search for a _consistent_ convention. All translations
marked with `TODO: translate`, for instance.

I have written many unhelpful comments and TODOs in the past. These
have the spin-off of creating double or triple work:

1. When you return to re-read it and are not in the same flow

2. When someone
   else reads it and misinterprets it, contacting you to explain your gibberish

3. When someone else reads it, thinks they understand, executes based on their understanding,
   then requests your review; leaving you with the job of reviewing and
   re-explaining what you meant.

All of this actually goes to say; write comments as "context-free" as
possible. The surrounding code may be all context that remains when you or
others return. Also write executable TODOs.

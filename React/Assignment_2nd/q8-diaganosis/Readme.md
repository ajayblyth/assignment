Q8. Diagnosis, no coding required

You are given a component where a developer has wrapped everything in useMemo and useCallback, including a useMemo that adds two numbers, a useMemo that builds a two item array, and a useCallback for a function that is never passed to any child. Write a short paragraph. Identify which of these are pointless and explain why. Then explain, in general, why wrapping everything in useMemo and useCallback is a mistake rather than a free speed boost.

================
Using useMemo to add two numbers is unnecessary because the calculation is already very fast. Memoizing it can add more overhead than simply recalculating it.

Using useMemo for a small two-item array is also unnecessary since creating such an array is wont take that much space to begin with. It is more useful for expensive calculations .

Using useCallback for a function that isn't passed to a child component or used in a dependency array doesn't provide any real benefit.

So, useMemo and useCallback should only be used when they solve a real performance problem.Otherwise they will just  make the code more complicated without actually improving performance.
=======================
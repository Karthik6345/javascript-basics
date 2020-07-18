Example to run functions in parallel
//Promise.all Wait for all promises to be resolved, or for any to be rejected
const [userResponse, postsResponse] = await Promise.all([
  fetchUserAsync(),
  fetchPostsAsync(),
]);

Difference b/w promise and async-await.

async and await blocks the code  ----------------  Promise does not blocks the code execution

If the output of function2 is dependent on the output of function1, I use await
 async and await -----  If two functions can be run in parallel, create two different async functions and then run them in parallel.
 promise ---- To run promises in parallel, create an array of promises and then use Promise.all(promisesArray)
 
In order to avoid call back, you can use async-await.

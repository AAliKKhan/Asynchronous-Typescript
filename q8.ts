// Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.


async function resolveP(): Promise<number[]> {
  let prom1 = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  let prom2 = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  // Await each promise individually
  let result1 = await prom1;
  let result2 = await prom2;

  // Collect results in an array
  let results = [result1, result2];
  return results;
}

resolveP()
  .then(result => console.log("Result", result))
  .catch(error => console.error("Error", error));

export {};
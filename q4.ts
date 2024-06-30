//Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.

  async function resolveP(): Promise<string[]> {

  let prom1 = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  let prom2 = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  let promise1 = await prom1;
  let promise2 = await prom2;

  let result = [promise1.toString(), promise2.toString()];
  return result;
}

resolveP()
  .then(result => console.log("Result", result))


  
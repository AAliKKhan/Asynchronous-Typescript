// uestion 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.

async function resolveP(): Promise<string> {
  let prom = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Ali');
    }, 2000);
  });

  let promise1 = await prom;
  return promise1;
}

resolveP()
  .then(res => console.log("Result", res))
  .catch(err => console.error("Error", err));
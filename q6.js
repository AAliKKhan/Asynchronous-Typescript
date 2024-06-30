// Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.
async function resolveP() {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Error Occurred'));
        }, 2000);
    });
    try {
        let promise1 = await prom;
        return promise1;
    }
    catch (error) {
        throw error;
    }
}
resolveP()
    .then(res => console.log("Result", res))
    .catch(err => console.error(err.message));
export {};

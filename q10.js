// Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.
async function multiplyByTwoAsync(inputPromise) {
    try {
        const result = await inputPromise;
        const multipliedResult = result * 2;
        return multipliedResult;
    }
    catch (error) {
        throw error;
    }
}
const examplePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 3000);
});
multiplyByTwoAsync(examplePromise)
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));
export {};

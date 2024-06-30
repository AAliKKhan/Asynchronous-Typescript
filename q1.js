// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World". function greet() 
function delay(millisecond) {
    return new Promise(resolve => setTimeout(resolve, millisecond));
}
async function greet() {
    await delay(2000);
    return (`hello world`);
}
greet().then(message => console.log(message));
export {};

// Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
function xyz(cb) {
    setTimeout(() => {
        cb();
    }, 1000);
}
xyz(() => {
    console.log(`Callback`);
});
export {};

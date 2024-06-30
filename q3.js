// Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.
function res(display, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(display);
        }, delay);
    });
}
res("Resolved", 3000).then((message) => console.log(message));
export {};

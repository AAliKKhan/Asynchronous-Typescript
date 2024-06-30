//  Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
function squareAfterDelay(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}
// Define a constant number
const constantNumber = 5;
// Call the function with the constant number and log the result
squareAfterDelay(constantNumber)
    .then(result => console.log(`The square of ${constantNumber} is ${result}`))
    .catch(error => console.error('Error:', error));
export {};

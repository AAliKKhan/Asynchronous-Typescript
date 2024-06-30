//Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.

function repeatedlyCallFunction(): void {
  // Define your function to be called repeatedly
  function myFunction(): void {
    console.log("Function called");
    // Schedule the next call after 2 seconds
    setTimeout(myFunction, 2000);
  }

  // Start the first call immediately
  myFunction();
}

// Start calling the function repeatedly
repeatedlyCallFunction();

 
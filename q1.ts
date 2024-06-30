// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World". function greet() 

function delay (millisecond:number):Promise <void>{
  return new Promise (resolve => setTimeout(resolve,millisecond))
}
async function greet():Promise<string> {
  await delay (2000)
  return (`hello world`)
  
}
greet().then(message => console.log(message))

  
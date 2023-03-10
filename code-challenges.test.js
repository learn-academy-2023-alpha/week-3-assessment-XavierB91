// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("greaterThanTwo" , () => {
  const fibLength1 = 6
  const fibLength2 = 10
  it ("returns numbers that are greater than 2", () => {
    expect(greaterThanTwo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    
})
})


// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// output after running yarn jest : 
// ● greaterThanTwo › returns numbers that are greater than 2

//     ReferenceError: greaterThanTwo is not defined

// b) Create the function that makes the test pass.
// Psuedocode: create a function called greaterThanTwo. This function will take in an input( a number, greater than 2) and return an array which length contains the numbers of the fibonacci sequence.  The greaterThanTwo function will have the parameters of length  of the arrays fibLength1 and FibLength2. This function will take in number > than 2 and returns those numbers in a new array.
// inputs: fibLength1 and fibLength2
//outputs: expected outputs [1,1,2,3,5,8] and [1,1,2,3,5,8,13,21,34,55]. I believe I will define an array within the greaterThanTwo function and eshablish a conditonal statement using an for loop to get the expected outputs. I will use the bulit-in methods of .length (property returns the length of a string.) and .push (adds one or more elements to the end of an array and returns the new length of the array.) to itterate over the array and produce the outputs. 
// (version 1) const greaterThanTwo = (length) => {
//   let array = [1,1]
//   for(let i = 2 ; i > length;i++)
//   array.push(array[i-1]) + array [i+2]
//   return (array)
// } 
// (version 2) 
const greaterThanTwo = (length) => {
  let array = [1, 1];
  for (let i = 2; i < length + 1; i++){
    array.push(array[i - 2] + array[i -1])
  }
 return (array)
}

//  notes :  I'm still getting failures with this function, I know what I want to do I believe, but I don't know how to exactly express that in the code.  There are gaps in my logic that I'm just not knowledable enough to correct on my own yet. 


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// test outline :
// describe('my test', () => {
//   it('some text', () => {
//       expect(...)...;
//   })
// });

describe("leastToGreatest" , () => {
     it( "returns an array of the values sorted from least to greatest ", () => {
     expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
     expect(leastToGreatest(studyMinutesWeek2)).toEqual( [10, 15, 20, 45, 60, 65, 100])
   })
   })
 const studyMinutesWeek1 = {
  sunday: 90,
   monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60 }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
 sunday: 100,
 monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
   saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

//output  ● leastToGreatest › returns an array of the values sorted from least to greatest 

//     ReferenceError: leastToGreatest is not defined


// b) Create the function that makes the test pass.
// psuedocode : Create a function called leastToGreatest that takes in an object and returns an array of the values sorted from least to greatest. The parameters for this function will be an array. The input will be an object and the expected output will be an array of values located within the array from least to greatest. use the JavaScript Object.values() method to access the own enumerable properties of an object. Object.values(obj)
//  (version 3 )
 const leastToGreatest = (studyMinutesWeek1,studyMinutesWeek2)  => {
 Object.values(studyMinutesWeek1)
 return Object
}
// (version 2)
// const leastToGreatest = ()=> {
// studyMinutesWeek1.sort(function(a, b){return a-b})
// studyMinutesWeek2.sort(function(a, b){return a-b})
// }
//  console.log(Object.values(studyMinutesWeek1)
// (version1)
// const leastToGreatest = () => {
//   studyMinutesWeek1.sort((a,b)=>a-b);
// }

// sort numbers in ascending order
// leastToGreatest.sort((a, b) => a - b);

// console.log(leastToGreatest);

//notes : after numerous versions of syntax, I don't know how to successfully run this test.  The Object values method has actually left me more confused then when I started. I would like some assistance in understanding the actual ulitility of the method or rather how to call upon it when actually running the test, I'm not using it right ? 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// test outline :
// describe('my test', () => {
//   it('some text', () => {
//       expect(...)...;
//   })
// });
// a) Create a test with expect statements for each of the variables provided.
// (version2)
describe("newSumArray" , () => {
  const accountTransactions1 = [100, -17, -23, -9]
  const accountTransactions2 = [250, -89, 100, -96]
  const accountTransactions3 = []
  it( "returns an array of the accumulating sum ", () => {
    expect(newSumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(newSumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(newSumArray(accountTransactions3)).toEqual([])
})
})
// (version1)describe('newSumArray', () => {
//         it('takes in an array and returns an array of the accumulating sum', () => {
//         expect(newSumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
      
// })
// })

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// Expected output: []

// output : ● newSumArray › returns an array of the accumulating sum 

//     ReferenceError: newSumArray is not defined

// b) Create the function that makes the test pass.
// psuedocode, create an array of cumulative sum only using single line of code in JavaScript. This is a one-line JavaScript code snippet will use one of the more  popular ES6 features => Arrow Function syntax. I will create a function called newSumArray. Input will be an empty array or an array of numbers. I will create a test for this function with expect( expect gives you access to a number of "matchers" that let you validate different things) statements to check that values meet our specified conditons. newArraySum is the function value => sum += value, with sum initialized to zero. Every time it's called, sum is updated and will equal the previous value (output[n-1]) when called the next time (with input[n]).


const newSumArray = (arr) => arr.map((sum => value => sum += value)(0));
// //  PASS  ./code-challenges.test.js
//   // newSumArray
//   // ✓ returns an array of the accumulating sum  (2 ms)
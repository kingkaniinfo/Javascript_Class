// Concatinating two arrays 
// using Spread Operator 
let arr1 = [ 4, 5 ]; 
let arr2 = [ 8, 9, 10 ] 
  
arr = [ ...arr1, ...arr2 ]; 
console.log(arr);



const obj1 = { name: "Amit", age: 22 }; 
const newObject = { ...obj1, city: "Uttarakhand" }; 
  
console.log(newObject);

let num = [1, 2, 3, 4, 5]; 

let [a1,b1,...c1] = num

console.log(c1)

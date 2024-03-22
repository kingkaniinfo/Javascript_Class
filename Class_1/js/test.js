// let kani = ["Asee","Dilse","Hassan","syed","siraj"]


    // for(i=0;i<kani.length;i++){
    //     document.write(`<br>N_ame : ${kani[i]}`)
    // }

    // for(j in kani){
    //     document.write(`<br> Na_me : ${kani[j]}`)
    // }

    // for(k of kani){
    //     document.write(`<br> Nam_e : ${k}`)
    // }

    // kani.forEach((f)=>{
    //     document.write(`<br> Name_ : ${f}`)
    // })

    // let res_map = kani.map((m)=>{
    //     return  `<br> _Name_ : ${m}<br>`
    // }).join("")
    // document.write(`${res_map}`)


    // To print start us pramid

    // for(g=0;g<=5;g++){
    //     for(n=0;n<=g;n++){
    //         document.write(`*`)
    //      }
    // document.write(`<br>`)
    // }

    // To print number 1 to 10 

    // for(i=1;i<=10;i++){
    //     document.write(`<br> ${i}`)
    // }

    

    // To print odd num less then 100

    // method - 1

    // for(i=1;i<=100;i++){
    //     if(i % 2 != 0){
    //         document.write(`<br>${i}`)
    //     }
    // }

    // method - 2

    // for(i=1;i<=100;i+=2){
    //     document.write(`<br>${i}`)
    // }

    //Print the multiplication table with 7

//     for(i=1;i<=10;i++){

//         let res= `7 * ${i} = ${i*7}`
//         document.write(`<br>${res} `)
//     }

//     output

// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35
// 7 * 6 = 42
// 7 * 7 = 49
// 7 * 8 = 56
// 7 * 9 = 63
// 7 * 10 = 70


// //print table form 1 to 100
// for(  let i = 1; i <= 10; i++)
// {
//     table_num(i)
// }
// function table_num(n)
// {
//     for( i=1;i<=10;i++){
//         let res = `${n} * ${i} = ${n*i}`
//         document.write(`<br>${res}`)
//     }
// }
// Calculate the sum of numbers from 1 to 10

// let sum = 0
// for(i=1;i<=10;i++){
//     sum+=i
// }
// document.write(`${sum}`)

// Calculate factorial of 10!

// let sum=1

// for(i=1;i<=10;i++){
//     sum*=i
// }
// document.write(`${sum}`)

// Calculate the sum of odd numbers greater than 10 and less than 30
// let sum= 0
// for(i=11;i<=30;i+=2){
//     sum+=i 
// }
// document.write(`${sum}`)


// convert from Celsius to Fahrenheit
// formula (0 * 1.8) + 32 = 32

// function celsius(n){
// return `${( n * 1.8 ) + 32}`

// }

// let res = celsius(20)
// document.write(`${res}`)

//convert from Fahrenheit to Celsius
//Formula (n - 32) / 1.8
// 32 = 0

// function fahrenheit(f) {
//     return `${(f - 32) / 1.8}`
// }

// let rest = fahrenheit(68)
// document.write(`<br>${rest}`)

// Calculate the sum of numbers in an array of numbers

// let a = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// function sumarr(ar){
//     let sum = 0;
//     for(i=0;i<ar.length;i++){
//         sum+= ar[i]
//     }

//     return sum
// }

// let res_arr = sumarr(a)
// document.write(`${res_arr}`)

//Calculate the average of the numbers in an array of numbers
//Average Formula sum of num /  length
// let ar = [1, 3, 9, 15, 90]

// function avg(a){
//     let n =a.length
//     let sum= 0
//     for(i=0;i<n;i++){
//         sum += a[i]
//     }

//     return sum / n
// }

// let res_avg = avg(ar)
// document.write(res_avg)

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// function positive(a){
//     return a.filter((f) => f >= 0)
// }

// let res_pos= positive(ar)
// document.write(res_pos)

//Find the maximum number in an array of numbers
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// function maxv(a){
//     let max= a[0]

//     for(i=0;i<a.length;i++)
//     {
//         if(a[i] > max)
//         {
//             max = a[i]
//         }
//     }
//     return max
// }

// let res_max = maxv(ar)
// document.write(res_max)
// Print the first 10 Fibonacci numbers without recursion
//formul  f + s = t ,again s + t = fr

// let f0 = 0 , f1 = 1
// document.write(`${f0},${f1}`)
// for(i=0;i<=10;i++){
//     let fi = f0 + f1
//     document.write(`,${fi}`)
//     f0 = f1
//     f1 = fi 
// }

// #15: Create a function that will find the nth Fibonacci number using recursion

// function fibo(n){
//     if(n==0){
//         return 0
//     }
//     if(n==1){
//         return 1
//     }
//     return fibo(n-1)+fibo(n-2)
// }

// let res_fibo = fibo(11)
// document.write(`<br>${res_fibo}`)

// #16: Create a function that will return a Boolean specifying if a number is prime

// function hihi(n){
//     if(n<2){
//         return false
//     }
//     if(n==2){
//         return true
//     }

//     let div=Math.sqrt()

//     for(i=2;i<=div;i++){
//         if( n % 2 == 0){
//             return false
//         }
//     }

//     return true
// }

// let final1 = hihi(11)
// document.write(final1)

// Calculate the sum of digits of a positive integer number

// function sum_2(n){

//     let s = n.toString()
//     let sum = 0

//     for (i of s){
//         let digi = parseInt(i)
//         sum += digi
//     }

//     return sum

// }

// let check = sum_2(1234)
// document.write(check)

//18: Print the first 100 prime numbers


// Function prints the first nPrimes numbers
// printPrimes(100);
// // function printPrimes(p)

// // {
// //     let n = 0;
// //     let i = 2;
    
// //     while(n < p)
// //     {
// //         if (isPrime(i))
// //         {
// //             document.write(`<br>${i}`);
// //             n++;
// //         }
        
// //         i++;
// //     }
// // }

// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     let maxDiv = Math.sqrt(n);
    
//     for(let i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
    
//     return true;
// }

// 19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// document.write(getPrimes(10, 100));

// function getPrimes(nPrimes, startAt)
// {
//     let ar = [];
    
//     let i = startAt;
    
//     while(ar.length < nPrimes)
//     {
//         if (isPrime(i))
//         {
//             ar.push(i);
//         }
        
//         i++;
//     }
    
//     return ar;
// }

// Returns true if a number is prime
// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     let maxDiv = Math.sqrt(n);
    
//     for(let i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
    
//     return true;
// }

// #20: Rotate an array to the left 1 position


// let ka =["kani","Mohamed","Hussain"]
// function right(i){
//     let fire = i.shift()
//     i.push(fire)
// }
// right(ka)
// document.write(ka)

//21: Rotate an array to the right 1 position

// let ar = [1, 2, 3];
// rotateRight(ar);
// println(ar);

// function rotateRight(ar)
// {
//     let last = ar.pop();
//     ar.unshift(last);
// }

// #22: Reverse an array

// let ar = [1, 2, 3];

// function reverseArray(ar)
// {
//     let fin = [];
//     for(let i=ar.length - 1;i>=0;i--){
//         fin.push(ar[i])
//     }
//     return fin
// }

// let ar3 = reverseArray(ar);
// document.write(ar3);


// #23: Reverse a string

// let fname = "Kani"

// function reverseString(s)
// {
//     let s2 = "";
//     for(let i = s.length - 1; i >= 0; i--){
//         let char = s[i];
//         s2 += char;
//     }
    
//     return s2;
// }
// let s = reverseString(fname);
// document.write(s);

// 24: Create a function that will merge two arrays and return the result as a new array

// let ar = mergeArrays(ar1, ar2);
// document.write(ar);

// let one = [1,2,3,4,5]
// let two = [6,7,8,9,10]

// function mergr(a,b){
//     let final = []

//     for(i of a){
//         final.push(i)
//     }

//     for(i of b){
//         final.push(i)
//     }

//     return final
// }

// let check = mergr(one,two)
// document.write(check)


// ---------------------
// let new1 = [1,2,3,4]
// function left(n){
//     let first = n.shift()
//     n.push(first)
// }
// left(new1)
// document.write(new1)

// let new1 = [1,2,3,4]
// function left(n){
//     let first = n.pop()
//     n.unshift(first)
// }
// left(new1)
// document.write(new1)

//array reverse

// let lol = [1,2,3,4,5]

// function reverse(f){
//     let fin=[]
//     for(i=f.length - 1 ; i >= 0 ; i--){
//         fin.push(f[i])
//     }
//     return fin
// }

// let check = reverse(lol)
// document.write(check)
// console.log(check)

//reverse srting

// let family = "sulthan"

// function fam(s){
//     let news = ""
//     for(i=s.length - 1 ; i>=0;i--){
//         let res = s[i]
//         news += res
//     }

//     return news
// }

// let check = fam(family)
// document.write(check)

//merge array

// let one = [1,2,3]
// let two = [3,4,5]

// function merge(m1,m2){
//     let newm=[]
//     for(i of m1){
//         newm.push(i)
//     }
//     for(i of m2){
//         newm.push(i)
//     }

//     return newm
// }

// let check = merge(one,two)
// document.write(check)

// for(i=1;i<=10;i++){
//     document.write(`${i}`)
// }

// for(i=1;i<=100;i+=2){
//     document.write(`<br>${i}`)
// }

// for(i=1;i<=10;i++){
//     document.write(`<br> 7 * ${i} = ${i*7}`)
// }

// for( let i=1;i<=10;i++){
//    table_num(i)
// }
// function table_num(n){
//     for(i=1;i<=10;i++){
//         let res = `<br> ${n} * ${i} = ${n*i}`
//         document.write(`<br>${res}`)

//     }
// }

    // let sum = 0
    // for( let i=11;i<=30;i++){
    //     if( i % 2 != 0){
    //         sum +=i
    //     }
    // }
    // document.write(sum)

//c to f (n * 1.8) + 32

// function celli(n){
//     return `${(n * 1.8) + 32}`
// }
// let res = celli(0)
// document.write(res)

// function celsius(n){
//     return `${( n * 1.8 ) + 32}`
//     }
//     let res = celsius(0)
//     document.write(`${res}`)



// let n= [1,2,3]

// function sum_a(a){
// let sum = 0
// let m = a.length
// for(i=0;i<m;i++){
//     sum+=a[i]
// }
// return sum / m

// }
// 

// let a = [1,2,3,-1,-2,-3]

// function post(n){
//    let max=n[0]
//    for(i=0;i<n.length;i++)
//    {
//    if(n[i] > max)
//    {
//     max+=n[i]
//    }
//    }

//    return max
// }
// let res = post(a)
//  document.write(res)

// let f0 = 0 , f1 = 1
// document.write(`${f0},${f1}`)
// for(i=2;i<=10;i++){
//     fi = f0 + f1
//     document.write(`,${fi}`)
//     f0=f1
//     f1=fi
// }



// function hihi(n){
//         if(n<2)
//             return false;
        
//         if(n==2)
//             return true;
        
    
//         let div=Math.sqrt(n)
    
//         for(i=2;i<=div;i++){
//             if( n % 2 == 0){
//                 return false;
//             }
//         }
    
//         return true;
//     }
    
//     let final1 = hihi(8)
//     document.write(final1)

// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     let maxDiv = Math.sqrt(n);
    
//     for(let i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     } 
//     return true;
// }

// document.write(isPrime(2));
// document.write(isPrime(3));
// document.write(isPrime(4));
// document.write(isPrime(5));
// document.write(isPrime(9));

// function sum_2(n){

//     let s = n.toString()
//     let sum = 0

//     for (i of s){
//         let digi = parseInt(i)
//         sum += digi
//     }

//     return sum

// }

// let check = sum_2(1234)
// document.write(check)
// script : validator.js

function printError(elemId, hintMsg) 
{ 
document.getElementById(elemId).innerHTML = hintMsg; 
} // Defining a function to validate form 

function validateForm() 
{ // Retrieving the values of form elements 
let name = document.contactForm.name.value; 
let email = document.contactForm.email.value; 
let mobile = document.contactForm.mobile.value; 
let country = document.contactForm.country.value; 
let gender = document.contactForm.gender.value; 
let hobbies = []; 
let checkboxes = document.getElementsByName("hobbies[]"); 

for(let i=0; i < checkboxes.length; i++)
 { 
    if(checkboxes[i].checked) 
    {
    // Populate hobbies array with selected values
    hobbies.push(checkboxes[i].value);
    } 
} 
// Defining error variables with a default value

let nameErr = emailErr = mobileErr = countryErr = genderErr = true; 
// Validate name 
if(name == "") 
{ 
    printError("nameErr", "Please enter your name"); 
} 
else
{ 
    let regex = /^[a-zA-Z\s]+$/; 

    if(regex.test(name) === false) 
    { 
        printError("nameErr", "Please enter a valid name"); 
    } 
    else
    { 
        printError("nameErr", ""); 
        nameErr = false; 
    } 
} 

    // Validate email address 
if(email == "") 
{ 
    printError("emailErr", "Please enter your email address"); 
} 
else 
{ 
// Regular expression for basic email validation 
    let regex = /^\S+@\S+\.\S+$/; 
    if(regex.test(email) === false) 
    { 
        printError("emailErr", "Please enter a valid email address"); 
    } 
    else
    { 
        printError("emailErr", ""); 
        emailErr = false; 
    } 
    } 
// Validate mobile number 
if(mobile == "") 
{ 
printError("mobileErr", "Please enter your mobile number");
 } 
else 
{ 
let regex = /^[1-9]\d{9}$/; 
if(regex.test(mobile) === false) 
{ 
printError("mobileErr", "Please enter a valid 10 digit mobile number"); 
} 
else{ printError("mobileErr", ""); 
mobileErr = false; 
} 
} 
// Validate country 
if(country == "Select") 
{ 
printError("countryErr", "Please select your country"); 
} 
else { 
printError("countryErr", ""); 
countryErr = false; 
} 
// Validate gender 
if(gender == "") 
{ 
printError("genderErr", "Please select your gender");
 } 
else 
{ 
printError("genderErr", ""); 
genderErr = false; 
} 
// Prevent the form from being submitted if there are any errors
 if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) 
{ 
return false; 
} 
else { 
// Creating a string from input data for preview 
let dataPreview = "You've entered the following details: \n" + "Full Name: " + name + "\n" + "Email Address: " + email + "\n" + "Mobile Number: " + mobile + "\n" + "Country: " + country + "\n" + "Gender: " + gender + "\n"; 
if(hobbies.length) 
{ 
dataPreview += "Hobbies: " + hobbies.join(", "); 
} 
// Display input data in a dialog box before submitting the form alert(dataPreview); 
} 
};


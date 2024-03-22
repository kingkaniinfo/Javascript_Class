// Particle examination report launguage
// document.getElementById("btn").addEventListener('click',()=>{
// let check = document.getElementById("fname").value

//Match Method

// let p = /mango/

// let w ="kani"

// let n = new RegExp("[a-z]")



// let res= check.match(n)
// let res= n.test(check)
// let res= check.exec(w)
// let res= check.search(n)
// let res= check.replace(n)
// let res= check.split(n)




// console.log(res)

// document.getElementById("res").innerHTML = res
// })

// Character Class

// [a-z]
// [A-Z]
// [0-9]

// [a-zA-z0-9]

// [^a-z]
// [^A-Z]

// short Cut character class

// \d - digit
// \D - not digit

// \w - all words
// \W - not take words but allow digit

// \s - Widesapce

// g - globle
// i - casesensitive
// m - multiline
// u - unicode

// Repetation Quatifier



// document.getElementById("btn").addEventListener('click',()=>{
//     let check = document.getElementById("fname").value
//     // let p = /[^\w,$]+/
//     // let p = /[\b\w]+/g
//     let p = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;


//     let res= p.test(check)
//     // let res= check.split(p)

//     // for(i in res){
//     //     console.log(res[i])

//     // }

//     // res.forEach(e => {
//     //     console.log(e)    
//     // });


//     console.log(res)

    
//     document.getElementById("res").innerHTML = res
// })

//


// Storage
// 1.get item
// 2.set item
// 3.remove
// 4.lenght
// 5.clear
// 6.key

// sessionStorage.setItem("Name","kani")

// let check = sessionStorage.getItem("Name")
// document.write(check)

// localStorage.setItem("Stu_1",JSON.stringify({Name:"kani",Age:22,Gender:"male"}))

// let check = localStorage.getItem("Stu_1")
// let res = JSON.parse(check)
// document.write(` Name : ${res.Name} <br> Age : ${res.Age} <br> Gender : ${res.Gender}`)

// let local_1 = localStorage.removeItem("Stu_1")
// console.log(local_1)

// remove

// localStorage.setItem("Native","Mandapam")
// localStorage.setItem("Current","Chennai")


// let remo = localStorage.removeItem("Native")
// console.log(remo)

//lenght

// let len = localStorage.length
// console.log(len)

//key

// let key1 = localStorage.key(1)
// console.log(key1)

//Clear

// let clr = localStorage.clear()
// console.log(clr)

//----------------------------------------------------

//Regular Expression - are object used to perform the perl launguage and its are the case sensitive


// let regex = /t.o/g
//g - globle modifier to tell the system know the word is golble it retrun the all available given word
// let str1 = "Hello , Welcome all too javascripte and Hello everyone too"

//exec() - it can return the array of index in the string
/*
let output = regex.exec(str1)
console.log(output)
output = regex.exec(str1)
console.log(output)*/

//test() - it return boolean condtion true or false

//match() - it same us the execution but it return all the match word in array
/*
let output = str1.match(regex)
console.log(output)*/

//repalce() - it can repalce the word
/*
let output = str1.replace(regex, "Kani")
console.log(output)*/

//search() it return boolean value (0)-true or (-1)-false
/*
let output = str1.search(regex)
console.log(output)*/

//split() - it can split the word available in text and return arrat value
/*
let output = str1.split()
console.log(output)*/

//............................................................

//Metacharacter - it are character with special meaning like the dot character
// -> we can remove any one character from this word and put a dot in its place lets 
// -> now the dot characterhere willreplace this character and system will not through any error
//1. .dot for replace sinlge letter
//2. *asterisk for replace multiple line
//3. ^carrot it check for start part of the string otherwise it not return
//4. $doller - it check for end part of the string
//5. ?Qusetionmark - it an optional in this we can give coorect character or leave i 

// let regex = /Hello/
// let regex = /H*o/
// let regex = /H*o/
// let regex = /^to/
// let regex = /to$/
let regex = /javas?cript?/



let str1 = "Hello , Welcome all to javacrip and Hello everyone Welcome to"

let out = regex.test(str1)
console.log(out);

let exe = regex.exec(str1)
console.log(exe)



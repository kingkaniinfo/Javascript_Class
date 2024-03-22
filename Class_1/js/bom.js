//Propagation

// let parent = document.querySelector("div")
// let child = document.querySelector(".btn")
// parent.addEventListener('click',()=>{
//     console.log("Click parent")
// },true)
// child.addEventListener('click',()=>{
//     console.log("Click child")
// })

// 
// Three method
//     1.call
//     functionname.call(this object,aruguments)
//     2.apply
//     functionname.apply(this object,arr[i])
    // 3.Bind - function copy the 

// let borrow = {
//     fname:"kani",
//     age:22,
//     fun: function(a,b){
//         document.write(`<br>${this.fname},${this.age},${a+b}`)
//     }
// }

// borrow.fun(12,12)

// let bro1 = {
//     fname:"Amir",
//     age:24
// }
// // borrow.fun.call(bro1,1,2)
// let s = borrow.fun.bind(bro1,1,2)
// s()
// console.log(borrow.fun.call(borrow1,1,2))
// borrow.fun.apply(borrow1,[1,2])

// function First(a,b){
//     this.a = a;
//     this.b = b;
// }

// function Second(c){
//     First.call(this,1,2)
//     this.c=c
//     console.log(this);
// }

// let new_one = new Second(3)

// function First(a,b){
//     this.a = a;
//     this.b = b;
// }

// function Second(c){
//     First.bind(this,1,2)
//     this.c=c
//     console.log(this);
// }

// let new_one = new Second(3)


//hosting is all decleration are moved to top of current scope or definition

// the are two type of scoping
// 1.function hoisting 
// 2.Variable Hoisting

// let res = add(1,2)
// document.write(res)

// let add = (a,b)=>{
//    return a + b
// }

// fun(12,10)
// function fun(a,b){
//     document.write(a+b)
// }

// let first = ()=>{
//     let a= 10
//     let second = ()=>{
//         let b=20
//         return a + b
//     }
//     return second()
    
// }
// console.log(first())
// let a= 10
// let first = (b)=>{  
//     let second = (c)=>{
//         return third(a+c)
//     }
//     let third(d){
//         return a*d
  
//     }
//     return second

// }
// console.log(first(20))

// let a = 10;
// let first = (b) => {  
//     let third = (d) => { // Define third function properly
//         return a * d;
//     };

//     let second = (c) => {
//         return third(a + c); // Call third function
//     };

//     return second;
// };

// console.log(first(20));

//Json

// 1.Stingnfy - javascripte(client) to server(Json)
// 2.Parse - server(json) to javascripte(clinet)

// let Newone = {
//     fanme : "kani",
//     age : 22,
//     gender : "male"

// }

// console.log(Newone)


// let res = JSON.stringify(Newone)
// console.log(res)
// document.write(res)

// let Jhonone = `{
//     "name":"Hussain",
//     "age":22
// }`

// console.log(Jhonone);

// let check = JSON.parse(Jhonone)
// console.log(check)
// document.write(`<br>${check.name},${check.age}`)

// //Array to Json
// let stu = ["kani","hussain"]

// let final = JSON.stringify(stu)
// document.write(`<br> ${final}`)
// //Json to js
// let j_stu = `["Mohamed","Hussain"]`

// let j_final = JSON.parse(j_stu)
// document.write(`<br> ${j_final}`)

let check = `[
	{
        "name": "Aleix Melon",
        "id": "E00245",
        "role": ["Dev", "DBA"],
        "age": 23,
        "doj": "11-12-2019",
        "married": false,
        "address": {
            "street": "32, Laham St.",
            "city": "Innsbruck",
            "country": "Austria"
            },
        "refer": "E0012"
	},
    {
        "name": "Bob Washington",
        "id": "E01245",
        "role": ["HR"],
        "age": 43,
        "doj": "10-06-2010",
        "married": true,
        "address": {
            "street": "45, Abraham Lane.",
            "city": "Washington",
            "country": "USA"
            },
        "refer": null
	}
]`

let final = JSON.parse(check)
console.log(check)
let result = final.map((m)=>{
    return `<br> Name : ${m.name} <br> Id : ${m.id} <br> Role : ${m.role}  <br> Age : ${m.age}  <br> D.O.B : ${m.doj} <br> Married : ${m.married} <br> Address : ${m.address.street} ,  ${m.address.city},  ${m.address.country}  <br>  Referred : ${m.refer}<hr>`
}).join("")
document.write(result)

// let p = kani
// console.log(p)
// let r = kani,hussain
// console.log(r)

// console.log(a)

// try {
//     let fn = "kani"
//     document.write(fin)
// }
// catch(e){
//     alert("please Check" + e.message)

// }

// document.querySelector("#btn").addEventListener('click',()=>{
//     let check = document.querySelector("#fname")
//     try{
//         if( check.value == ""){
//             // throw new Error("Please Enter Name")
//             throw "Please Enter Name"
//             //  {
//             //     fname:"Error Occur",message:"Enter Number Please"
//             // }
//         }else{
//             document.querySelector("#res").innerHTML = `Sucessful`
//         }
//     }
//     catch(e){
//         // alert(e.fname+ ":"+e.message)
//         alert(e)
//     }
//     finally{
//         alert("Thank for Submission")
//     }
// })

// try {
//     let num = prompt("Enter an Number :")
//     if(num === ""){
//         throw 'Cannot be Empty !!'
//         // document.querySelector("#res").innerHTML = `Cannot be Empty`
//     } else if(isNaN(num)){
//         throw 'Enter A valid Number'
//         // document.querySelector("#res").innerHTML = `Enter A valid Number`

//     } else {
//         throw 'success'
//         // document.querySelector("#res").innerHTML = `Success`

//     }
// }

// catch(e){
//     alert(e)
// }

// finally{
//     alert("Thank You !!")
// }

// try{
//     let num = div(10,a)
//     if(num === Infinity){
//         throw new Error("Invalid Number")
//     }
//     console.log(num)
// }
// catch(e){
//     // console.log(e.message)
//     // console.log(e.name)
//     // console.log(e.stack)
//     // console.log(e)
//     if(e.name === "Error"){
//         console.log("Number is Infinity")
//     }else if(e.name === "NotVr"){
//         console.log("Not a Number")
//     }

// }

// function div(a,b){
//     if( isNaN(a) || isNaN(b)){
//     let error = new Error("Not a Number")
//     error.name = "NotVr"
//     throw error
//     }
//     return a / b
// }

//Nested Try

// document.querySelector("#btn").addEventListener('click',()=>{
//     let check = document.querySelector("#fname")
//     try{
//         if(check.value == "")
//         {
//             try{
//                 throw "please Enter Name"
//             } 
//             catch(e){
//                 alert(e)
//             }
//         } else {
//              document.querySelector("#res").innerHTML = `Sucessful`
//         }
        
//     }

//     catch(m){
//         alert(m)
//     }


// })

document.querySelector("#btn").addEventListener('click',()=>{
    let check = document.querySelector("#fname").value
    document.querySelector("#res").innerHTML = check.toUpperCase()
})


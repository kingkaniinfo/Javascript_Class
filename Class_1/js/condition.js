//------Condition


//Relation operator
// let a = 10 , b = 18 + 2;
// document.write(`${a==b}<br>`)
// document.write(`${a===b}<br>`)
// document.write(`${a<b}<br>`)
// document.write(`${a>b}<br>`)

//logical operator

// let product = "samsung" , price = 5000;
// document.write(`<br>${product=="samsung" || price>=5000}`)
// document.write(`<br>${product=="samsung" && price>=1000}`)
// document.write(`<br>${!product=="samsung" || price>=5000}<br>`)

//------Condition or branch Statement

// if(product=="samsung" && price >= 5000 ){
//     document.write(`<br>Offer available`)
// }
// else{
//     document.write(`<br>offer not Available`)
// }

// let pro = document.getElementById("product")
// let pri = document.getElementById("price")

// function res() 
// {

   
//     if(pro.value=="mi" && pri.value >= 5000){
//         document.write(`Offer Available`)
//     }
//     else {
//         document.write(`Not available`)
//     }
// }

// let dep = document.getElementById("dept")
// let mark = document.getElementById("mark")



// let result = (r)=>{

//     r.preventDefault(r)

//     let res = document.getElementById("res")

//     if(dep.value == "IT" && mark.value >= 470)
//     {
//        res.innerHTML=`You Got First Class ${dep.value} `    
//     }
//     else if(dep.value == "IT"  && mark.value >= 420){
//         res.innerHTML=`You Got Second Class ${dep.value} `
//     }
//     else if(dep.value == "IT" && mark.value >= 350){
//         res.innerHTML=`You Got Third Class ${dep.value}`
//      }
//      else if(dep.value == "IT" && mark.value >= 300){
//         res.innerHTML=`You Got Fourth Class ${dep.value}`
//      }
//      else if(dep.value == "IT" && mark.value <= 299){
//         res.innerHTML="Sorry You Fail ${dep.value} "
//       }
//      else
//      {
//         res.innerHTML="Enter Correct Mark !!!"

//      }

//      console.log(res)
// }

// let car = document.getElementById("rd")

// car.addEventListener('click',

// (tar)=>{
//switch condition
    // switch(tar.target.getAttribute("id"))
    // {
    //     case "audi":
    //         document.getElementById("car").innerHTML=`10000`
    //         break
    //     case "bmw":
    //         document.getElementById("car").innerHTML=`20000`
    //         break
    //     case "benze":
    //         document.getElementById("car").innerHTML=`30000`
    //         break 
    //     default: 
    //         document.getElementById("car").innerHTML=`Please Select Correctly`
    //         break         
        
    // }
//if condition

//     if(tar.target.getAttribute("id")=='audi'){
//         document.getElementById("car").innerHTML=`10000`
//     }
//     else if(tar.target.getAttribute("id")=='bmw'){
//         document.getElementById("car").innerHTML=`20000`

//     }
//     else if(tar.target.getAttribute("id")=='benze'){
//         document.getElementById("car").innerHTML=`30000`

//     }
//     else
//     {
//         document.getElementById("car").innerHTML=`Please Select Correctly`  
//     }


// })


// let text = "Hellow World"

// console.log(text)

// let i = 0 
// while( i <= 5)
// {
//     document.write(`<br>${i}`)
//     i++
// }


// let j=0
// do{
//     document.write(` <br>${j}`)
//     j++

// }while(j <=5 )

// let a = 50
// while(a>=0){
//     document.write(`<br>${a}`)
//     a--
// }

// let msg = "Better Day's are come !!!"
// let i = 10
// while(i>=0){
//     document.write(`<br>${i} - ${msg}`)
//     i--
// }

// let j=1
// while(j<=10){
//     document.write(`<br>${j} - ${msg}`)
//     j++

// }


//for(initialization;condition;increment or decrement){
//     statement
// }

// for(k=1;k<=10;k++){
//     if(k%2==0)
//     {
//         document.write(`<br>Even ${k}`)
//     }
// }

// for(k=10;k>=1;k--){
//     if(k%2==0)
//     {
//         document.write(`<br><br>Even ${k}`)
//     }
// }

//Ternary Operator

// let num = 3

// if(num==1){
//     document.write(`1`)
// }
// else if (num==2){
//     document.write(`2`)
// }
// else if (num==3){
//     document.write(`3`)
// }else {
//     document.write(`none of them`)
// }

// num == 1 ? document.write(`1`) : num == 2 ? document.write(`2`) : num == 3 ? document.write(`3`) : document.write(`none of them`)


// let pri=5
// pri % 2 == 0 ? document.write(`even`) : document.write(`odd`)

// let prim = document.getElementById("pri") 

// document.getElementById("btn").addEventListener('click',()=>{
     
//    (prim.value % 2 == 0) ? document.getElementById("res").innerHTML=`Even Number`:document.getElementById("res").innerHTML=`odd Number`
// })



// let stu= ["kani","Hussain","moha"]

// for(i=0;i<stu.length;i++)
// {
//    document.write(`<br> ${stu[i]}`)
// }

// for(k in stu){
//    document.write(`<br> ${stu[k]}`)
// }

// for(l of stu){
//    document.write(`<br> ${l} `)
// }


// let txt = document.getElementById("tet")


// function checkPalindrome(string) {

//    // find the length of a string
//    const len = string.length;

//    // loop through half of the string
//    for (let i = 0; i < len / 2; i++) {

//        // check if first and last string are same
//        if (string[i] !== string[len - 1 - i]) {
//            return document.getElementById("res").innerHTML=
//            'It is not a palindrome';
//        }
//    }
//    return document.getElementById("res").innerHTML=
//    'It is a palindrome';


// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

let empoly = [
   {stu_name:"kani",company:"apple",age:22,add:{doorno:123,street:"west",pincode:2345},msg:()=>{return("Good")},img:"image/anime_2.jpeg" ,salary:15000,hobbies:["sports","watching videos","reading books"]},
   {stu_name:"arun",company:"google",age:23,add:{doorno:456,street:"north",pincode:5555},msg:()=>{return("Excellent")},img:"image/anime_3.jpeg",salary:25000,hobbies:["sports","watching videos","reading books"]},
   {stu_name:"siva",company:"apple",age:22,add:{doorno:998,street:"west",pincode:666},msg:()=>{return("Amazing")},img:"image/anime_4.jpeg",salary:35000,hobbies:["sports","watching videos","reading books"]},
   {stu_name:"gopi",company:"mi",age:24,add:{doorno:111,street:"west",pincode:999},msg:()=>{return("wonderful")},img:"image/anime_5.jpeg",salary:45000,hobbies:["sports","watching videos","reading books"]}
]

//map 
document.getElementById("stu").addEventListener('click',()=>{
   let stu_one = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`
   }).join("")

   document.getElementById("res_stu").innerHTML = `${stu_one}`
})



// filter
document.getElementById("btn").addEventListener('click',()=>{
 
   let brand = document.getElementById("comp").value;
   let filt = empoly.filter((fil)=>fil.company == brand)
   let final = filt.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`
   }).join("")

   document.getElementById("res").innerHTML = `${final}`
})

//Push Operation

document.getElementById("push").addEventListener('click',()=>{

   let newOne = {
      stu_name:"Hassan",
      company:"apple",
      age:24,
      add:{doorno:321,street:"west-north",pincode:9999},msg:()=>{return("Worjhard")},
      img:"image/anime_8.jpeg"
   }

   empoly.push(newOne)
   let push_type = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`

   })

   document.getElementById("res_push").innerHTML = `${push_type}`


})

// //Unshif OPeration

document.getElementById("unshift").addEventListener('click',()=>{
   let shiftOne = {
      stu_name:"siraj",
      company:"mi",
      age:18,
      add:{doorno:321,street:"west-north",pincode:9999},msg:()=>{return("Worjhard")},
      img:"image/anime_6.jpeg"
   }

   empoly.unshift(shiftOne)

   let un_shift = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`

   })

   document.getElementById("res_unshift").innerHTML = `${un_shift}`

})

// splice

document.getElementById("splice").addEventListener('click',()=>{
   let spliceOne = {
      stu_name:"Naseem",
      company:"google",
      age:18,
      add:{doorno:321,street:"west-north",pincode:9999},msg:()=>{return("Workhard")},
      img:"image/anime_10.jpeg"
   }

   empoly.splice(3,0,spliceOne)

   let splice_one = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`

   })

   document.getElementById("res_splice").innerHTML = `${splice_one}`
})


// pop opretion

document.getElementById("pop").addEventListener('click',()=>{
   empoly.pop()

   let pop_one = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`

   })

   document.getElementById("res_pop").innerHTML = `${pop_one}`
})


// shift it delete first one

// document.getElementById("shift"),addEventListener('click',()=>{
//    empoly.shift()
//    let shift_one = empoly.map((j)=>{
//       return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street} <hr>`

//    })

//    document.getElementById("res_shift").innerHTML = `${shift_one}`

// })

// find

// document.getElementById("sub").addEventListener('click',()=>{

//       let findit = document.getElementById("search")

//       let key_1 = empoly.find((fin)=>{} return fin.age == findit.value)
//       let find_one =
//          `<br> <img = src=${key_1.img} width="100px" height="100px" > <br> <h2> Name : ${key_1.stu_name}</h2><br> Company Name : ${key_1.company}<br> Age : ${key_1.age} <br> Review : ${fin.msg()} <br> Address : ${key_1.add.street} <hr>`
       
         
      
// if(key_1)
// {
      
//       document.getElementById("res_find").innerHTML = `${find_one}`


//find index
   document.getElementById("findindex").addEventListener('click',()=>{

     let f_index = empoly.findIndex((f)=>{
      return f.age == 23
     })

     empoly[f_index].stu_name = "Sulthan"
      let index_one = empoly.map((j)=>{
            return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street}<br> Salary : ${j.salary} <hr>`
   })
   document.getElementById("res_findindex").innerHTML = `${index_one}`
})

//Update

document.getElementById("update").addEventListener('click',()=>{

   let update_one = empoly.map((j)=>{
      if(j.age == 22){
         (j.salary = 20000)
      }
      else if(j.age == 23){
         (j.salary = 60000)
      }
   
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street}<br> Salary : ${j.salary} <hr>`
   })
    

   document.getElementById("res_update").innerHTML = `${update_one}`
})
//sort

document.getElementById("sort").addEventListener('click',()=>{

   let ss= empoly.sort((a,b)=>{
      return (a.stu_name < b.stu_name)? -1 : 0;
   })
   console.log(ss)

   let sort_one = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street}<br> Salary : ${j.salary} <br> Hobbies : ${j.hobbies}<hr>`
   })

   document.getElementById("res_sort").innerHTML = `${sort_one}`
})
//Delete
document.getElementById("delete").addEventListener('click',()=>{
   let del_one = delete empoly[2]

   let del_res = empoly.map((j)=>{
      return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Review : ${j.msg()} <br> Address : ${j.add.street}<br> Salary : ${j.salary} <hr>`
   })

   document.getElementById("res_delete").innerHTML = `${del_res}`
   console.log(`${del_res}`)

})

// Dom


document.getElementById("dom").addEventListener('click',(e)=>{
   e.preventDefault()


   let form_one = document.createElement("form")

   form_one.setAttribute("method","post")
   form_one.setAttribute("id","form_main")
   form_one.setAttribute("enctype","multipart/form-data")

   let br_1 = document.createElement("br")

   let stu_input = document.createElement("input")

   stu_input.setAttribute("type","text")
   stu_input.setAttribute("id","stu_name")
   stu_input.setAttribute("placeholder","Enter Your ")

   let br_2 = document.createElement("br")
   let br_10 = document.createElement("br")


   let com_input = document.createElement("input")

   com_input.setAttribute("type","text")
   com_input.setAttribute("id","company")
   com_input.setAttribute("placeholder","Enter Company Name")

   let br_3 = document.createElement("br")
   let br_11 = document.createElement("br")


   let age_input = document.createElement("input")

   age_input.setAttribute("type","text")
   age_input.setAttribute("id","age")
   age_input.setAttribute("placeholder","Enter Your age")

   let br_4 = document.createElement("br")
   let br_12 = document.createElement("br")


   let salary_input = document.createElement("input")

   salary_input.setAttribute("type","text")
   salary_input.setAttribute("id","salary")
   salary_input.setAttribute("placeholder","Enter Salary")

   let br_5 = document.createElement("br")
   let br_13 = document.createElement("br")

   let hob_input1 = document.createElement("input")

   hob_input1.setAttribute("type","checkbox")
   hob_input1.setAttribute("id","hobbies1")
   hob_input1.setAttribute("name","hobbies")//check
   hob_input1.setAttribute("value","sports")

   let hob_lable1 = document.createElement("lable")
   hob_lable1.setAttribute("for","hobbies1")

   let hob_cont1 = document.createTextNode("sports")
   hob_lable1.appendChild(hob_cont1)


   let hob_input2 = document.createElement("input")

   hob_input2.setAttribute("type","checkbox")
   hob_input2.setAttribute("id","hobbies2")
   hob_input2.setAttribute("name","hobbies")//check
   hob_input2.setAttribute("value","watching videos")

   let hob_lable2 = document.createElement("lable")
   hob_lable2.setAttribute("for","hobbies2")

   let hob_cont2 = document.createTextNode("watching videos")
   hob_lable2.appendChild(hob_cont2)

   let br_6 = document.createElement("br")
   let br_14 = document.createElement("br")

   let sub_input = document.createElement("input")

   sub_input.setAttribute("type","submit")
   sub_input.setAttribute("value","submit")
   sub_input.setAttribute("id","sub_int")
   sub_input.setAttribute("onclick","newData(event)")

   form_one.appendChild(br_1)

   form_one.appendChild(stu_input)

   form_one.appendChild(br_2)
   form_one.appendChild(br_10)

   form_one.appendChild(com_input)

   form_one.appendChild(br_3)
   form_one.appendChild(br_11)


   form_one.appendChild(age_input)

   form_one.appendChild(br_4)
   form_one.appendChild(br_12)


   form_one.appendChild(salary_input)
   form_one.appendChild(br_5)
   form_one.appendChild(br_13)


   form_one.appendChild(hob_input1)
   form_one.appendChild(hob_lable1)

   form_one.appendChild(hob_input2)
   form_one.appendChild(hob_lable2)

   form_one.appendChild(br_6)
   form_one.appendChild(br_14)


   form_one.appendChild(sub_input)


   let final_dom = document.getElementById("res_dom")
   final_dom.appendChild(form_one)

   newData = (e)=>{
      e.preventDefault()

      console.log("welcome kani")

      let new_data = {
         stu_name : document.getElementById("stu_name").value,
         company : document.getElementById("company").value,
         age : document.getElementById("age").value,
         salary: document.getElementById("salary").value,
         hobbies : Array.from(document.getElementsByName("hobbies")).filter( f => f.checked).map( m => m.value)
      }
      console.log(new_data)
      empoly.push(new_data)

      let final_cont = empoly.map((j)=>{
         return `<br> <img = src=${j.img} width="100px" height="100px" > <br> <h2> Name : ${j.stu_name}</h2><br> Company Name : ${j.company}<br> Age : ${j.age} <br> Salary : ${j.salary} <br> Hobbies : ${j.hobbies}<hr>`
      })

      document.getElementById("final_dom").innerHTML = `${final_cont}`

   }
})




 
 




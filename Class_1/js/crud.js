let form = document.getElementById("form")

let textInput = document.getElementById("textInput")
let dateInput = document.getElementById("dateInput")
let textarea = document.getElementById("textarea")

let task = document.getElementById("tasks")

let msg = document.getElementById("msg")

let add = document.getElementById("add")



//form

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    formValidation();
})

//Text Input

let formValidation = ()=>{
    if(textInput.value == ""){
        msg.innerHTML = `Task Cannot be Blank`
        console.log("failure")
    } else {
        msg.innerHTML = ``
        console.log("submit")
    }
    {    
        acceptdata();
        add.setAttribute("data-bs-dismiss","model")
        add.click();
// IIFE method (immeidatle invoke function expression)
        (()=>{
            add.setAttribute("data-bs-dismiss","model")
        })();
    }
    
};

//Empty Array

let data = [];

let acceptdata = ()=>{
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description : textarea.value
    })
    // localStorage.clear()
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)
    createtask()
} 


// map , calling

let createtask = ()=>{
    task.innerHTML= "";
    data.map((x,y)=>{
        return task.innerHTML=`<div id=${y}>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.description}</p>

        <span class="options">
          <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
        </span>
    </div>`
    })
}



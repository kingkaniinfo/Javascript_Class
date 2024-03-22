

let detail = [
    {
        name:'kani',
        age: 22,
        position:'Trinee',
        experience: '2-Years'       
    }
]





document.getElementById("img1").addEventListener('click',()=>{
  
     document.getElementById("res").innerHTML=`<br> Name : ${detail[0].name} <br> Age : ${detail[0].age} <br> Position : ${detail[0].position} <br> Experience : ${detail[0].experience } <hr>`
})
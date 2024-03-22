let para = document.getElementsByTagName("p")[1].innerText
console.log(para)

let qur = document.querySelector(".p1").innerText
console.log(qur)

// alert(document.body.firstElementChild.nodeName)
// alert(document.body.lastElementChild.nodeName)


// document.querySelector("p").style.color = "gold"

// let allpar = document.querySelectorAll("p")
// for(a in allpar){
//     // allpar[a].style.color = "gold"
//     allpar[a].style.cssText =  "color : red; background : black; font-size : 3rem;"

// }

document.getElementById("unorder").addEventListener('mouseover',()=>{
    document.getElementById("unorder").classList.toggle("fir_1")
})
document.getElementById("unorder").addEventListener('mouseleave',()=>{
    document.getElementById("unorder").classList.remove("fir_1")
})








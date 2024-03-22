
// <!-- Asynchronence javascripte and xml -->

// <!-- -> Loading the data from server and selectively updating part of web page without reload the home page
// it is technology for developing better faster using html , css , js and xml
// xml - used for to store and transport data from webserver

// Asynchronence -> the web applcation cloud send and recive data from the webserver without the refresh the page so this background process of sending and receiving data from the server along with different section of the web page

// work procedure for ajax
// 1.xmlhttprequetstobject 
// -> to request data from webserver and html dom to display or use data
// -> it is an Api it form an object whos method help in transfer of data between web browser and web server
// 2.HTML dom - when an web page is loaded the browser create an DOM of the page -->



//syntax
//let obj = new XMLHttpRequest()
//Ready State - one of the one of the proprties of XMLHttpRequest()
//0 - request not initialization station
//1 - server connection establish
//2 - request receive
//3 - Processing the request
//4 - request finish and respond ready

//onReadyStateChange - changing the state
//states - it an property of XMLHttpRequest() it return the state number of request 
// 1.200 - page available
// 2.404 - page unavailable
// 3.100 - continue
// 4.403 - forbidden
// 5.500 - internet server error
// 5.503 - service unavailable

//Method - to send request to the server 
//1.open
//2.send

//Open method
// 1. get or post
// 2. file eg. url 
// 3. boolean

let ajax_one = ()=>{
    let newone = new XMLHttpRequest();
    newone.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("check").innerHTML = this.responseText
        }
    }
    newone.open("GET","index.html",1)
    newone.send()
    
    
}
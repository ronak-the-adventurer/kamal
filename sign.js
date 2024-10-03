let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");


signinbtn.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerText = "Sign In";
    signupbtn.classList.add('disable');
    signinbtn.classList.remove("disable");
}



signupbtn.onclick = function(){
    namefield.style.maxHeight = "65px";
    title.innerText = "Sign up";
    signupbtn.classList.remove('disable');
    signinbtn.classList.add("disable");
}
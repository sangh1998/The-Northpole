function sideNavbar(){

const hamburger = document.querySelector("#hamburger");
const sideNavbar = document.querySelector(".sideNavbar");
const closeNavbar = document.querySelector("#closeNavbar");

hamburger.addEventListener("click",function(){
    sideNavbar.style.width = "16em";
})
closeNavbar.addEventListener("click",function(){
    sideNavbar.style.width = "0";
})
}

sideNavbar()
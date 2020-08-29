let nav= document.querySelector('.navbar');

function toogle(){
if(nav.classList[1] === "toggle"){
    nav.classList.remove("toggle");
    nav.classList.add("closing");
}else{
    nav.classList.add("toggle");
    nav.classList.remove("closing");
}
}
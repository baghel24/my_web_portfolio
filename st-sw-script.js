 
const styleSwitcherToggle = document .querySelector(".st-sw-to ");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".st-sw").classList.toggle("open");
})
 
window.addEventListener("scroll",() =>{
    document .queryselector(".st-sw").classList .contains("open")
    document .queryselector(".st-sw").classList .remove("open")
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}


const dayNight = document.querySelector(".d-n");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark"); 
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")){
    dayNight.querySelector("i").classList.add("fa-sun");}

    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
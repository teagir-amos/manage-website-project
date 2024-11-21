//Email validation//
const emailField = document.querySelector("#email-field");
const emailError = document.querySelector("#email-error");
const go = document.querySelector("#Go");
const verified = document.querySelector("#verified");
function validateEmail() {
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "please enter a valid Email";
        document.getElementById("email-error").style.color = "red"
        return false;
    }
    emailError.innerHTML = "";
    document.getElementById("Go").style.color = "#fff"
    document.getElementById("Go").style.fontWeight = "bolder"
    return  true;
};

//gettting the current year//
let currentYear = document.querySelector("#new");
let thisYear = new Date();
let year = thisYear.getFullYear();
currentYear.innerHTML = year;

const links = document.querySelector("#five");
const cancel1 = document.querySelector("#times");
const options = document.querySelector("#option");
const manage = document.querySelector("#manage");
options.addEventListener('click', (e) => {
        links.style.display = "inherit";
        cancel1.style.display = "inherit";
        manage.style.overflow = 'hidden';
});
cancel1.addEventListener("click", (e)=>{
    links.style.display ='none';
    cancel1.style.display = "none";
    manage.style.overflow = "visible"
})
function changeBg(params) {
    const nav = document.querySelector("#nav");
    window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        if (scrollValue >= 30) {
            nav.classList.add("bgColor")
        } else {
            nav.classList.remove("bgColor")
        }
    });
}
changeBg();

const anisha = document.querySelector("#anisha");
const ali = document.querySelector("#ali");
const richard = document.querySelector("#richard");
const shanai = document.querySelector("#shanai");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const radio4 = document.querySelector("#radio4");
radio1.addEventListener("click", () =>{
    ali.style.display = "initial";
    anisha.style.display = "none";
    richard.style.display = "none";
    shanai.style.display = "none";
});
radio2.addEventListener("click", () =>{
    ali.style.display = "none";
    anisha.style.display = "initial";
    richard.style.display = "none"
    shanai.style.display = "none"
});
radio3.addEventListener("click", () =>{
    ali.style.display = "none";
    anisha.style.display = "none";
    richard.style.display = "initial";
    shanai.style.display = "none";
});
radio4.addEventListener("click", () =>{
    ali.style.display = "none";
    anisha.style.display = "none";
    richard.style.display = "none"
    shanai.style.display = "initial"
});

function changeBox() {
    const wrapper = document.querySelector("#wrapper");
    const anisha = document.querySelector("#anisha");
    const ali = document.querySelector("#ali");
    const richard = document.querySelector("#richard");
    const shanai = document.querySelector("#shanai");
    const radio1 = document.querySelector("#radio1");
    const radio2 = document.querySelector("#radio2");
    const radio3 = document.querySelector("#radio3");
    const radio4 = document.querySelector("#radio4");
    ali.addEventListener("click", function(e){
        ali.style.display = "none";
        anisha.style.display = "initial";
        richard.style.display = "none"
        shanai.style.display = "none"
        document.getElementById("anishablue").checked = true;
    });
    anisha.addEventListener("click", function(e){
        ali.style.display = "none";
        anisha.style.display = "none";
        richard.style.display = "initial";
        shanai.style.display = "none";
        document.getElementById("richardblue").checked = true;
    });
    richard.addEventListener("click", function(e){
        ali.style.display = "none";
        anisha.style.display = "none";
        richard.style.display = "none"
        shanai.style.display = "initial"
        document.getElementById("shanaiblue").checked = true;
    });
    shanai.addEventListener("click", function(e){
        ali.style.display = "initial";
        anisha.style.display = "none";
        richard.style.display = "none";
        shanai.style.display = "none";
        document.getElementById("aliblue").checked = true;
    });
}
changeBox();

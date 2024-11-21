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
console.log(anisha);
  
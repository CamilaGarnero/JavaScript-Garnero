/* Menu Hamburgesa */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});
/* Carrusel */
const slider = document.querySelector("#slider");
let sliderSection = document.querySelector(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelector(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelector(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 5000);
/* Formulario de Reguistro */
document.getElementById("btnInicioSecion").addEventListener("click",iniciarSecion);
document.getElementById("btnReguistrarse").addEventListener("click",register);

let loginRegister = document.querySelector(".contenedor__login-register");
let formLogin = document.querySelector(".formLogin");
let formRegister = document.querySelector(".formRegister");
let atrasLogin = document.querySelector(".cajaAtrasLogin");
let atrasRegister = document.querySelector(".cajaAtrasRegister");

function iniciarSecion () {
    formRegister.style.display = "none";
    loginRegister.style.left = "10px";
    formLogin.style.display = "block";
    atrasRegister.style.opacity = "1";
    atrasLogin.style.opacity = "0";
}
function register () {
    formRegister.style.display = "block";
    loginRegister.style.left = "410px";
    formLogin.style.display = "none";
    atrasRegister.style.opacity = "0";
    atrasLogin.style.opacity = "1";
}

/* Contact-Formulario1 */
const formulario1 = document.getElementById('form1');

formulario1.addEventListener('submit',(e) => {

    e.preventDefault();
    let mail = document.getElementById('email-form1').value
    console.log(mail);
})
/* Store */

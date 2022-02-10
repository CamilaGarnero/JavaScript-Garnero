/* Menu Hamburgesa */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});



/* Cuestionario */
function verificarRespuestas(){

    let total = 8;
    let puntos = 0;

    let myForm = document.forms["quizForm"];
    let respuestas = ["c","a","c","b","d","a","d","b"];

    for(let i = 1; i <= total;i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === ''){
            alert("Por favor responde a la pregunta" + i);
            return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h3>Obtuviste <span>'+puntos+'</span> de <span>'+total+' puntos</span></h3>';

    return false;
}
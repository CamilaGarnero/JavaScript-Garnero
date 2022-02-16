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

/* Store */
const productos = [
    {
        id:1,
        nombre:'Juguete para perro caucho natural redondo porta Snacks',
        imagen:'https://tse1.mm.bing.net/th?id=OIP.JjY6WG1HACWR6SxrmuLIzAHaHa&pid=Api&P=0&w=300&h=300',
        precio:'$150'
    },
    {
        id:2,
        nombre:'Juguete de goma para perros',
        imagen:'https://tse1.mm.bing.net/th?id=OIP.OTYEaDLv8qY5tGDxBXwySQHaHa&pid=Api&P=0&w=300&h=300',
        precio:'$75'
    },
    {
        id:3,
        nombre:'Pelota Goma huella juguete perros ',
        imagen:'https://tse4.mm.bing.net/th?id=OIP.MCmhXdEAb_UHBhOvGZx0cwHaHa&pid=Api&P=0&w=300&h=300',
        precio:'$120'
    },
    {
        id:4,
        nombre:'Juguete Control Remoto Para Gatos Dif Colores',
        imagen:'https://http2.mlstatic.com/rata-raton-juguete-control-remoto-para-gatos-dif-colores-D_NQ_NP_717769-MLM29238189797_012019-F.jpg',
        precio:'$230'
    },
    {
        id:5,
        nombre:'Juguete Eco para Gato Ratones 2',
        imagen:'http://cdn.shopify.com/s/files/1/0079/9647/3441/products/81vwzT7EAsL._SL1500_5a5bd6bc-37c8-477d-9b4d-e131bb739359_1024x1024.jpg?v=1551072923',
        precio:'$85'
    },
    {
        id:6,
        nombre:'Juguetes para Gatos Interactivo 4 EN 1 ',
        imagen:'https://dejadepensar.com/wp-content/uploads/2020/09/Juguetes-para-Gatos-Interactivos-4-EN-1-3.jpg',
        precio:''
    }
]

const listado = document.getElementById ("listado");
for(const producto of productos) {
    let contenedor = document.createElement("li");
    contenedor.className = "producto";
    contenedor.id = producto.id;
    contenedor.innerHTML = `
    <div class="imagen-producto">
        <img src="${producto.imagen}" alt"">
    </div>
    <p class="nombre"> ${producto.nombre} </p>
    <p class="precio"> ${producto.precio} </p>`
    listado.appendChild(contenedor);
}
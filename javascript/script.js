/* Menu Hamburgesa */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});
/* Carrusel */
const slider = document.querySelector("#slider");
let sliderSection = document.querySelector(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length [-1]];

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
    let sliderSectionLast = sliderSection[sliderSection.length [-1]];
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
document.addEventListener("DOMContentLoaded", e => {
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('../api.json');
        const data = await res.json();
        console.log(data);
        pintarProductos(data);
        detectarBotones(data);
    } catch (error) {
        console.log(error);
    }
}
const contenedorProductos = document.querySelector('#contenedor-productos');
const pintarProductos = (data) => {
    const template = document.querySelector('#template-productos').content
    const fragment = document.createDocumentFragment();

    data.forEach(producto => {
        //console.log(producto);
        template.querySelector('img'),setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5'),textContent = producto.title
        template.querySelector('p span').textContent = producto.precio
        template.querySelector('button').dataset.id = producto.id
        const clone = template.cloneNode(true);
        fragment.appendChild(clone)
    });
    contenedorProductos.appendChild(fragment)
}

const detectarBotones = (data) => {
    const botones = querySelectorAll('.card button');

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log(btn.dataset.id);
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
            if(carrito.hasOwnProperty(producto.id)){
                producto.cantidad = carrito[producto.id].cantidad + 1
            }

            carrito[producto.id] = {...producto}
            //console.log(carrito);
            pintarCarrito()
        })
    })
}
const items = document.querySelector('#items');
let carrito = {}
const pintarCarrito = () => {
    const template = document.querySelector('#template-carrito');
    const fragment = document.createDocumentFragment().content

    items.innerHTML = ''
    Object.values(carrito).forEach( producto => {
        //console.log(producto);
        template.querySelector('th').textContent = producto.id
        template.querySelectorAll('td')[0].textContent = producto.title
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        template.querySelector('span').textContent = producto.precio * producto.cantidad

        //Botones
        template.querySelector('.btn-info').dataset.id = producto.id
        template.querySelector('btn-danger').dataset.id = producto.id

        const clone = template.cloneNode(true);
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    pintarFooter()
    accionBontones()
}
const footer = document.querySelector('#footer-carrito');
const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
        footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío</th>'
        return
    }

    const template = document.querySelector('#template-footer').content
    const fragment = document.createDocumentFragment ()

    const nCantidad = Object.values (carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0);

    template.querySelectorAll('td')[0].textContent = nCantidad
    template.querySelector('span').textContent = nPrecio

    const clone = template.cloneNode(true);
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito');
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}
const accionBontones = () => {
    const botonesAgregar = document.querySelectorAll('#items .btn-info');
    const botonesEliminar = document.querySelectorAll('#items .btn-danger');

    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log('btn.dataset.id');
            const producto = carrito[btn.dataset.id];
            producto.cantidad ++
            carrito[btn.dataset.id] = {...producto}
            pintarCarrito()
        })
    })
    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log(eliminando...)
            const producto = carrito[btn.dataset.id]
            producto.cantidad --
            if (producto,cantidad === 0) {
                delete carrito[btn.dataset.id]
            } else {
                carrito[btn.dataset.id] = {...producto}
            }
            pintarCarrito()
        })
    })
}

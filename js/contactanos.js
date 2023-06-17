'use strict'
//Barra de navegacion
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0)

    var logo = this.document.querySelector(".brand img");
    if (window.scrollY > 0) {
        logo.setAttribute('src', '/img/logo.png')
    }
});

var menu = this.document.querySelector('.menu')
var menuBtn = this.document.querySelector('.menu-btn')
var closeBtn = this.document.querySelector('.close-btn')

menuBtn.addEventListener("click", () => {
    menu.classList.add('activate');
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove('activate');
})


//validación del formulario

const nombre = document.getElementById("name");
const celphone = document.getElementById("tel");
const email = document.getElementById("email");
const message = document.getElementById("message");
const termsAndCond = document.getElementById("termsAndCond");
const form = document.getElementById("form");
const listInput = document.querySelectorAll(".inputBox")
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const formTermsAndCond = document.querySelector('.form-termsAndCond');
const successMessage = document.querySelector('.successMessage')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if(condicion == true){
        enviarFormulario();
    }
    
});
function validacionForm(){
    let condicion = true;
    form.lastElementChild.innerHTML = "";
    if (!nameRegex.test(nombre.value)) {
        nombre.classList.add('is-invalid');
        nombre.nextElementSibling.textContent = 'Ingrese un nombre válido';
        condicion = false;
    } else {
        nombre.classList.remove('is-invalid');
        nombre.nextElementSibling.textContent = '';
    }
    if (celphone.value.length != 9 || celphone.value.trim() == "" || isNaN(celphone.value)) {
        celphone.classList.add('is-invalid');
        celphone.nextElementSibling.textContent = 'Ingrese un número de celular válido; el número ingresado solo debe contenter 9 dígitos.';
        condicion = false;
    }else{
        celphone.classList.remove('is-invalid');
        celphone.nextElementSibling.textContent = ''
    }
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        email.nextElementSibling.textContent = 'Ingrese un correo electrónico válido';
        condicion = false;
    } else {
        email.classList.remove('is-invalid');
        email.nextElementSibling.textContent = '';
    }
    if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        message.nextElementSibling.textContent = 'Por favor, ingrese un mensaje';
        condicion = false;
    } else {
        message.classList.remove('is-invalid');
        message.nextElementSibling.textContent = '';
    }
    if (!termsAndCond.checked) {
        termsAndCond.classList.add('is-invalid');
        formTermsAndCond.lastElementChild.textContent = 'Acepta los términos y condiciones*';
        condicion = false;
      } else {
        termsAndCond.classList.remove('is-invalid');
        formTermsAndCond.lastElementChild.textContent = '';
      }
    return condicion;

};
function enviarFormulario() {
    form.reset();
    successMessage.textContent = 'Formulario Enviado';
    successMessage.style.color = 'green';
}
'use strict'
//Barra de navegacion
window.addEventListener("scroll",function(){
    var header=this.document.querySelector("header");
    header.classList.toggle('down',window.scrollY>0)

    var logo = this.document.querySelector(".brand img");
    if(window.scrollY>0){
        logo.setAttribute('src','/img/logo-1.png')
    
    }
});

var menu = this.document.querySelector('.menu')
var menuBtn = this.document.querySelector('.menu-btn')
var closeBtn = this.document.querySelector('.close-btn')

menuBtn.addEventListener("click",() =>{
    menu.classList.add('activate');
})

closeBtn.addEventListener("click",() =>{
    menu.classList.remove('activate');
})
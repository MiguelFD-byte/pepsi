const li = document.querySelector('#li');
const li2 = document.querySelector('#li2');
const li3 = document.querySelector('#li3');
const section = document.querySelector('.main__landing');
const pepsi = document.querySelector('.pepsi');

function imgSlider(image){
    document.querySelector('.pepsi').src = image;
}

li.addEventListener('mouseover', () =>{
    imgSlider('img/pepsi001.png');
    section.style.background = '#0062be';
   
});

li2.addEventListener('mouseover', () =>{
    imgSlider('img/pepsi002.png');
    section.style.background = '#e60c2c';

});

li3.addEventListener('mouseover', () =>{
    imgSlider('img/pepsi003.png');
    section.style.background = '#333';
});

const btn = document.querySelector('#btn__menu');
const span = document.querySelector('.spn');
const span2 = document.querySelector('.spn2');
const span3 = document.querySelector('.spn3');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () =>{
   span.classList.toggle('active');
    span2.classList.toggle('active2');
    span3.classList.toggle('active');
    menu.classList.toggle('toggle');
});


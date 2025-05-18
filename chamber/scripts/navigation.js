const hamButton = document.querySelector('#menu');
const nav_bar = document.querySelector('.nav_bar');
const tourSelector = document.querySelector('#tour-name');
const priceSelector = document.querySelector('#price');

hamButton.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
    hamButton.classList.toggle('open');
});
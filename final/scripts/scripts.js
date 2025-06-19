const recipeList = document.getElementById('recipe-list');
const modal = document.getElementById('recipeModal');
const hamButton = document.querySelector('#menu');
const nav_bar = document.querySelector('.nav_bar');

hamButton.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.querySelectorAll('.close-button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('dialog[open]').forEach(dialog => {
            dialog.close();
        });
    });
});

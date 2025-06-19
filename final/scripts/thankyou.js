// Retrieve form data from localStorage
const data = JSON.parse(localStorage.getItem('formData') || '{}');
document.getElementById('firstName').textContent = data.firstName || '';
document.getElementById('lastName').textContent = data.lastName || '';
document.getElementById('email').textContent = data.email || '';
document.getElementById('recipe_name').textContent = data.recipe_name || '';
document.getElementById('recipe_category').textContent = data.recipe_category || '';
document.getElementById('recipe_time').textContent = data.recipe_time || '';
document.getElementById('recipe_ingridients').textContent = data.recipe_ingridients || '';
document.getElementById('recipe_steps').textContent = data.recipe_steps || '';
document.getElementById('recipe_funfact').textContent = data.recipe_funfact || '';

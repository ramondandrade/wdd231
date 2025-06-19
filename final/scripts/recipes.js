const nav_recipes = document.getElementById('category-nav');
if (nav_recipes) {
    nav_recipes.addEventListener('click', (e) => {
        console.log(e.target.tagName)
        if (e.target.tagName === 'BUTTON') {
            renderRecipes(e.target.getAttribute('data-filter'));
        }
    });
}


function createCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `
    <img src="${recipe.image}" loading="lazy" width="640" height="427" alt="${recipe.name}">
    <h2>${recipe.name}</h2>
    <p style="margin: 0.5rem 1rem;">${recipe.category} • ${recipe.bakingTime}</p>
  `;
    card.addEventListener('click', () => openModal(recipe));
    return card;
}

function openModal(recipe) {

    modal.classList.remove('hidden');
    document.getElementById('modal-title').textContent = recipe.name;
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-image').alt = recipe.name;
    document.getElementById('modal-time').textContent = `${recipe.category} • ${recipe.bakingTime}`;

    const ingredients = document.getElementById('modal-ingredients');
    ingredients.innerHTML = '';
    recipe.ingredients.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        ingredients.appendChild(li);
    });

    const steps = document.getElementById('modal-steps');
    steps.innerHTML = '';
    recipe.steps.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        steps.appendChild(li);
    });

    document.getElementById('modal-funfact').textContent = `Did you know? ${recipe.funFact}`;

    modal.showModal ? modal.showModal() : modal.classList.remove('hidden');

}


function renderTopRecipes() {

    var filter_start = 4.5;
    var top = 3;
    fetch('./data/recipes.json')
        .then(res => res.json())
        .then(recipes => {
            recipeList.innerHTML = "";
            recipes
                .filter(recipe => recipe.stars >= filter_start)
                .slice(0, top)
                .forEach(recipe => {
                    recipeList.appendChild(createCard(recipe))
                });
        })
        .catch(error => {
            recipeList.innerHTML = "Sorry, we are unable to show recipes."
            console.error('Error loading top recipes:', error);
        });

}


function renderRecipes(filter_cat = 'all') {

    console.log(filter_cat);
    fetch('./data/recipes.json')
        .then(res => res.json())
        .then(recipes => {
            recipeList.innerHTML = "";
            recipes
                .filter(recipe => filter_cat === 'all' || recipe.category === filter_cat)
                .forEach(recipe => {
                    recipeList.appendChild(createCard(recipe))
                });
        }).catch(error => {
            recipeList.innerHTML = "Sorry, we are unable to show recipes."
            console.error('Error loading recipes:', error);
        });

}

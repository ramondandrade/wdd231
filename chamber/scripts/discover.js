document.addEventListener('DOMContentLoaded', () => {
    
    // Visitor message logic
    const visitMsg = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message = '';
    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            message = "Back so soon! Awesome!";
        } else if (days === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${days} days ago.`;
        }
    }
    visitMsg.textContent = message;
    localStorage.setItem('lastVisit', now);

    // Fetch and display cards
    fetch('./data/discover.json')
        .then(res => res.json())
        .then(items => {
            const gallery = document.querySelector('.cards-container');
            items.forEach(item => {
                const card = document.createElement('article');
                card.className = 'discover-card';
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.photo}" alt="${item.name}" width="660" height="335" loading="lazy">
                    </figure>
                    <div>
                        <p>${item.description}</p>
                        <address>${item.address}</address>
                    </div>
                    <button type="button">Learn more</button>
                `;
                gallery.appendChild(card);
            });
        });
});
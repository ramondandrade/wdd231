

async function setBackgroundImageFromAPI() {
    try {
        const banner_home = document.getElementById('hero_home');
        const response = await fetch('https://foodish-api.com/api/');
        const data = await response.json();
        if (data && data.image) {
            banner_home.style.backgroundImage = `url('${data.image}')`;
        }
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

setBackgroundImageFromAPI();
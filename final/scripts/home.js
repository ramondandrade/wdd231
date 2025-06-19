

async function setBackgroundImageFromAPI() {
    const banner_home = document.getElementById('hero_home');
    try {
        const response = await fetch('https://foodish-api.com/api/');
        const data = await response.json();
        if (data && data.image) {
            banner_home.style.backgroundImage = `url('${data.image}')`;
        }else{
            banner_home.style.backgroundImage = `url('images/banner.webp')`;
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        banner_home.style.backgroundImage = `url('images/banner.webp')`;
    }
}

setBackgroundImageFromAPI();
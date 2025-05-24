document.addEventListener("DOMContentLoaded", async () => {
getWeather();
displayTop3Members();
});

async function getWeather(){

    const apiKey = "5c3b98170fe906a29c997bd6dc935716";
    const city = "Madrid";
    const units = "imperial";

    try {

        const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
        );
        const weatherData = await weatherRes.json();

        // Current weather
        const desc = weatherData.weather[0].description;

        function formatTime(unixTimestamp) {
            const date = new Date(unixTimestamp * 1000);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        document.getElementById("weather-info").innerHTML = `
            <img class="weather-icon" src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" height="100" width="100" alt="${desc}">
            <div>
            <span>${Math.round(weatherData.main.temp)}° F</span><br>
            <span>${weatherData.weather[0].main}</span><br>
            <span>High: ${Math.round(weatherData.main.temp_max)}°</span><br>
            <span>Low: ${Math.round(weatherData.main.temp_min)}°</span><br>
            <span>Humidity: ${weatherData.main.humidity}%</span><br>
            <span>Sunrise: ${formatTime(weatherData.sys.sunrise)}</span><br>
            <span>Sunset: ${formatTime(weatherData.sys.sunset)}</span>
            </div>
        `;
    } catch (err) {
       document.getElementById("weather-info").innerHTML += "<p>Unable to load weather data.</p>";
    }

     try {

        // Fetch 3-day forecast
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`);
        const forecastData = await forecastRes.json();
        const forecastList = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let forecastHTML = "";
        for (let i = 1; i <= 3; i++) {
            const dayData = forecastList[i];
            const date = new Date(dayData.dt_txt);
            const dayName = days[date.getDay()];
            const dayTemp = Math.round(dayData.main.temp);
            forecastHTML += `<span>${dayName}: <b>${dayTemp}° F</b></span><br>`;
        }
        document.getElementById("forecast-info").innerHTML = forecastHTML;

    } catch (err) {
       document.getElementById("forecast-info").innerHTML += "<p>Unable to load forecast data.</p>";
    }

}


async function displayTop3Members(){
    
    var html = "";
    const MembersRes = await fetch(`./data/members.json`);
    let Members = await MembersRes.json();

    Members = Members.filter(item => item.membership >= 2); // filter
    Members = Members.sort(() => Math.random() - 0.5); // reorder

    Members.slice(0, 3).forEach(m => {

        html += `
            <div class="business-info">
                <h3>${m.name}</h3>
                <img class="icon" src="${m.image}" alt="${m.name}" height="80" width="120" a>
                <div>
                <span><b>EMAIL:</b> ${m.email}</span><br>
                <span><b>PHONE:</b> ${m.phone}</span><br>
                <span><b>URL:</b> <a href="${m.website}" target="_blank">${m.website}</a></span>
                </div>
            </div>
        `;

    });

     document.getElementById("business-list-div").innerHTML = html;

}


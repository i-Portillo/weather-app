const tempDisplay = document.getElementById('temperature');
const cityDisplay = document.getElementById('city');
const weatherIcon = document.getElementById('weather-icon');
const searchBar = document.querySelector('input');
const searchBtn = document.querySelector('button');
const errorMsg = document.getElementById('error');

const apiKey = 'aecf99a5ef4c83d577c3003a7c4516a2';

async function getData (location = 'Palma') {
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?';

    const params = {
        'q': location,
        'appid': apiKey,
        'units': 'metric',
    }

    for (const key in params) {
        url += key + '=' + params[key] + '&';
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        cityDisplay.textContent = data.name;

        tempDisplay.textContent = data.main.temp;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        error.textContent = '';
    } catch(err) {
        console.log(err);
    }

    
}

getData();

searchBtn.addEventListener('click', () => {
    getData(searchBar.value);
});

searchBar.addEventListener('keyup', (evt) => {
    if (evt.key === 'Enter') {
        searchBtn.click();
        searchBar.value = '';
    }
});

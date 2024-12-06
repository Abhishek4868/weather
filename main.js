document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = '1de6bfd84ebb83892a0034a10624e5cd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            } else {
                document.getElementById('location').innerText = 'City not found';
                document.getElementById('temperature').innerText = '';
                document.getElementById('description').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});

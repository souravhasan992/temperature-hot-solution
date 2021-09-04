const API_KEY = `692b5e0d34357613d3a01eeebfed7208`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url)
    
}

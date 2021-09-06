const API_KEY = `7eff4cfbdf0b5f10de1209637bf3bd12`;
const searchTemp = () => {
    const cityName = document.getElementById('city-name');
    const city = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));    
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText('temp', temp.main.temp);
    console.log(temp);
}

const countryName = document.getElementById('country-name');
const searchButton = document.getElementById('search-button');
const countryInfo = document.getElementById('country-info');

searchButton.addEventListener('click', () => {
    let guidedCountry = countryName.value;
    const URL = `https://restcountries.com/v3.1/name/${guidedCountry}`
    console.log(URL);

    fetch(URL)
        .then((response) => response.json())
        .then(data => {
            const countryFlag = document.createElement('img');
            countryFlag.classList.add('flag-img');
            countryFlag.src = data[0].flags.svg;
            countryInfo.appendChild(countryFlag);

            const country = document.createElement('h1');
            country.innerText = data[0].name.common;
            countryInfo.appendChild(country);

            const capitalCity = document.createElement('li');
            capitalCity.innerText = 'Capital City: ' + data[0].capital[0];
            countryInfo.appendChild(capitalCity);

            const population = document.createElement('li');
            population.innerText = 'Population: ' + data[0].population;
            countryInfo.appendChild(population);

            const lang = document.createElement('li');
            lang.innerText = 'Languages: ' + Object.values(data[0].languages).toString().split(",").join(", ");
            countryInfo.appendChild(lang);

            countryName.value = '';
        })
        .catch(() => {
            const warning = document.createElement('h2');
            warning.classList.add('warn');
            warning.innerText = "Please enter a valid country name!"
            countryInfo.appendChild(warning);
        })
});
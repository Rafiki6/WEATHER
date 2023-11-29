let cities = [
    {
        name: "Benbrook, TX",
        latitude: 32.6732,
        longitude: -97.4606
    },
    {
        name: "Columbia City, OR",
        latitude: 45.8876553,
        longitude: -122.8149432
    },
    {
        name: "Dallas, TX",
        latitude: 30.8208447,
        longitude: -96.8967067
    },
    {
        name: "Jacksnonville, FL",
        latitude: 30.3451675,
        longitude: -82.0134488
    },
    {
        name: "New York City, NY",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        name: "Los Angeles, CA",
        latitude: 34.0522,
        longitude: -118.2437
    },
];
cities.forEach(c => cityList.innerHTML += `<option>${c.name}</option>`);

function drawPeriods(p) {
    grid.innerHTML +=
        `<tr>
    <td>${p.name}</td>
    <td>Temperature ${p.temperature} ${p.temperatureUnit}</td>
    <td>Winds ${p.windDirection} ${p.windSpeed} </td>
    <td>${p.shortForecast}</td>
    </tr>`
}

cityList.addEventListener("change", e => {
    const city = cities.find(c => cityList.value == c.name);
    //alert(cityList.value +" " +city.latitude +" " +city.longitude);

    const uri = "https://api.weather.gov/points/32.6791,-97.4641";
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            //  alert(data.properties.forecast)

            const url = data.properties.forecast;

            fetch(url)
                .then(response => response.json())
                .then(f => {
                    //alert(f.properties.periods[0].temeperature)
                    const foreCasts = f.properties.periods;
                    foreCasts.forEach(drawPeriods)
                })
        })
})

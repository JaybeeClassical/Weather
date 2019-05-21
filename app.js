window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureTimeZone = document.querySelector("temperature-timezone");
    let temperatureDegree = document.querySelector("temperature-degree");
    let temperatureDescription = document.querySelector("temperature-description");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.longitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.darksky.net/forecast/1299787a9e937056e2ee6cb21ebfc2d4/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, precipType, icon } = data.currently;

                    // set Dom Elements from APi
                    temperatureDegree.textContent = temperature;
                });
        });
    } else {
        h1.textcontent = "Hey reload site and allow geolocation";
    }
});
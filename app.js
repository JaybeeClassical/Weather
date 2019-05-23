window.addEventListener('load', () => {
    let long;
    let lat;
    let locationTimeZone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");

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
                    const { temperature, summary, icon } = data.currently;

                    // set Dom Elements from API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimeZone.textContent = data.timezone;

                    //set Icon
                    setIcons(icon, document.querySelector(".icon"));
                });
        });

    } else {
        h1.textcontent = "Hey reload site and allow geolocation";
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ "color": "pink" });
        const currentIcon = icon.replace(/-g/, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});
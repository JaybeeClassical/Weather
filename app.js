window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.longitude;
        });
    } else {
        h1.textcontent = "Hey reload site and allow geolocation";
    }
});
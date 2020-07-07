window.addEventListener("load", () => {
  let long;
  let lat;
  let temperaturDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.lon;
      lat = position.coords.lat;
      //const proxy = 'http://cors-anywhere.herokuapp.com/' then add `${proxy}  before api link

      // nyc lat = 40.6, long = -73.9

      // const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=701a9912bafd2cc04c9e21cf6f104f82`;
      const api = `api.openweathermap.org/data/2.5/weather?lat=$40.7&lon=$-73.9&appid=701a9912bafd2cc04c9e21cf6f104f82`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp, description, icon } = data.currently;
          //Set DOM Elements from the API
          temperatureDegree.textContent = temp;
          temperaturDescription.textContent = description;
          locationTimezone.textContent = data.timezone;
          //Set Icon
          setIcons(icon, document.querySelector(".icon"));
        });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, skycons[currentIcon]);
  }
});

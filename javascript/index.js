function updateTime() {
  // London locators
  let londonEl = document.querySelector("#london");
  let londonDateEl = londonEl.querySelector(".date");
  let londonTimeEl = londonEl.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateEl.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeEl.innerHTML = londonTime.format("h:mm:s [<small>]A[</small>]");

  // New York locators
  let newYorkEl = document.querySelector("#newyork");
  let newYorkDateEl = newYorkEl.querySelector(".date");
  let newYorkTimeEl = newYorkEl.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateEl.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeEl.innerHTML = newYorkTime.format("h:mm:s [<small>]A[</small>]");

  // Lisbon locators
  let lisbonEl = document.querySelector("#lisbon");
  let lisbonDateEl = lisbonEl.querySelector(".date");
  let lisbonTimeEl = lisbonEl.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");
  lisbonDateEl.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeEl.innerHTML = lisbonTime.format("h:mm:s [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesEl = document.querySelector("#cities");
  citiesEl.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:s"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectEl = document.querySelector("#city");
citySelectEl.addEventListener("change", updateCity);

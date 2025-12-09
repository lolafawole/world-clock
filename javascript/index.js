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

updateTime();
setInterval(updateTime, 1000);

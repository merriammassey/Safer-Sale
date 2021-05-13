//const router = require('express').Router();

var inputSearch = document.querySelector('#searchBar');
var libraryButton = document.querySelector(".library-searchButton");
var mallButton = document.querySelector(".shopping_mall-searchButton");
var policeButton = document.querySelector(".police_station-searchButton");

var nameLocation = document.querySelector(".name");
var address = document.querySelector(".address");
var openLocation = document.querySelector(".open");

libraryButton.addEventListener("click", function () {
  fetch(
    "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?query=library+in" +
      inputSearch.value +
      "&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA"
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      const nameValue = data["results"][0]["name"];
      const addressValue = data["results"][0]["formatted_address"];
      const openValue = data["results"][0]["opening_hours"]["open_now"];

    //   nameLocation.innerHtml = "Location name: " + nameValue;
    //   address.innerHtml = "Location address: " + addressValue;
    //   openLocation.innerHtml = "Location open: " + openValue;
    
        console.log(nameValue, addressValue, openValue)
    });
});

mallButton.addEventListener("click", function () {
  fetch(
    "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?query=shopping_mall+in" +
      inputSearch.value +
      "&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA"
  )
    .then((response) => response.json())
    .then((data) => {
      const nameValue = data["results"]["name"];
      const addressValue = data["results"]["formatted_address"];
      const openValue = data["results"]["opening_hours"]["open_now"];

    //   nameLocation.innerHtml = "Location name: " + nameValue;
    //   address.innerHtml = " Location address: " + addressValue;
    //   openLocation.innerHtml = "Location open: " + openValue;

    console.log(nameValue, addressValue, openValue)
    });
});

policeButton.addEventListener("click", function () {
  fetch(
    "https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/textsearch/json?query=police_station+in" 
    + inputSearch.value +
      "&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA"
  )
    .then((response) => response.json())
    .then((data) => {
      const nameValue = data["results"]["name"];
      const addressValue = data["results"]["formatted_address"];
      const openValue = data["results"]["opening_hours"]["open_now"];

    //   nameLocation.innerHtml = "Location name: " + nameValue;
    //   address.innerHtml = " Location address: " + addressValue;
    //   openLocation.innerHtml = "Location open: " + openValue;

    console.log(nameValue, addressValue, openValue)
    });
});


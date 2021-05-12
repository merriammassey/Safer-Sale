var inputSearch = document.getElementById("#searchBar");
var libraryButton = document.querySelector(".library-searchButton");
var mallButton = document.querySelector(".shopping_mall-searchButton");
var policeButton = document.querySelector(".police_station-searchButton");

var nameLocation = document.querySelector(".name");
var address = document.querySelector(".address");
var openLocation = document.querySelector(".open");

libraryButton.addEventListener("click", function () {
  fetch(
    "https://thingproxy.freeboard.io/fetchhttps://maps.googleapis.com/maps/api/place/textsearch/json?query=library+in+" +
      inputSearch.value +
      "&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["results"]["name"];
      var addressValue = data["results"]["formatted_address"];
      var openValue = data["results"]["opening_hours"]["open_now"];

      nameLocation.innerHtml = "Location name: " + nameValue;
      address.innerHtml = " Location address: " + addressValue;
      openLocation.innerHtml = "Location open: " + openValue;
    });
});

mallButton.addEventListener("click", function () {
  fetch(
    "https://thingproxy.freeboard.io/fetchhttps://maps.googleapis.com/maps/api/place/textsearch/json?query=shopping_mall+in+" +
      inputSearch.value +
      "&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["results"]["name"];
      var addressValue = data["results"]["formatted_address"];
      var openValue = data["results"]["opening_hours"]["open_now"];

      nameLocation.innerHtml = "Location name: " + nameValue;
      address.innerHtml = " Location address: " + addressValue;
      openLocation.innerHtml = "Location open: " + openValue;
    });
});

policeButton.addEventListener("click", function () {
  fetch(
    "https://thingproxy.freeboard.io/fetchhttps://maps.googleapis.com/maps/api/place/textsearch/json?query=police_station+in+" +
      inputSearch.value +
      "&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["results"]["name"];
      var addressValue = data["results"]["formatted_address"];
      var openValue = data["results"]["opening_hours"]["open_now"];

      nameLocation.innerHtml = "Location name: " + nameValue;
      address.innerHtml = " Location address: " + addressValue;
      openLocation.innerHtml = "Location open: " + openValue;
    });
});


var inputSearch = document.getElementById('searchBar');

var map;

var selectAutocompleteOptions = {
    location: inputSearch,
    radius: '500',
    types: ['(library)']
};

// map = new google.maps.Map(document.getElementById('map'), {
//     center: new google.maps.LatLng(-33.8665433, 151.1956316),
//     zoom: 15
// });

// selectAutocomplete = new google.maps.places.Autocomplete(inputSearch, selectAutocompleteOptions);
// selectAutocomplete.nearbySearch(selectAutocompleteOptions, callback);

// google.maps.event.addListener(selectAutocomplete, 'searchButton', function () {
//     console.log(results);
//});


fetch('https://thingproxy.freeboard.io/fetchhttps://maps.googleapis.com/maps/api/place/textsearch/json?query=library+in+'
 + inputSearch.value + 
 '&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://thingproxy.freeboard.io/fetchhttps://maps.googleapis.com/maps/api/place/textsearch/json?query=shopping_mall+in+'
  + inputSearch.value + 
  '&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA')
   .then(response => response.json())
   .then(data => console.log(data));

   fetch('https://thingproxy.freeboard.io/fetchhttps://maps.googleapis.com/maps/api/place/textsearch/json?query=police_station+in+'
   + inputSearch.value + 
   '&key=AIzaSyBBlNIHoJ1O1S0XMqeTTKXXISgTn6y3rbA')
    .then(response => response.json())
    .then(data => console.log(data));


// var map;
// var service;
// var infowindow;

// function initialize() {

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: new google.maps.LatLng(-33.8665433,151.1956316),
//       zoom: 15
//     });

//   var request = {
//     type: ['library']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
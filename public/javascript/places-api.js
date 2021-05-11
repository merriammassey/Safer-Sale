var inputSearch = document.getElementById('input-searched-city');

var map;
var selectAutocompleteOptions = {
    types: ['(library)']
};

map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(-33.8665433, 151.1956316),
    zoom: 15
});

selectAutocomplete = new google.maps.places.Autocomplete(inputSearch, selectAutocompleteOptions);
selectAutocomplete.bindTo('bounds', map);

google.maps.event.addListener(selectAutocomplete, 'place_changed', function () {
    console.log(selectAutocomplete.getPlace());
});

// var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     type: ['restaurant']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }
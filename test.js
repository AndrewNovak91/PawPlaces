// $(document).ready(function() {
//     var button = document.querySelector('.button');
//      var inputValue = document.querySelector('.inputText');
//      var name = document.querySelector('.name');
//      var desc = document.querySelector('.desc');
//      var temp = document.querySelector('.temp');
     
//      button.addEventListener('click', function() {
//      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value +"&units=imperial"+
//       '&appid=b909eeec74d5f5fb27fb07d14f5fec29')
//          .then(response => response.json())
//          .then(data => {
//              var nameValue = data['name'];
//              var tempValue = data['main']['temp'];
//              var descValue = data['weather'][0]['description'];
     
//              name.innerHTML = nameValue;
//              temp.innerHTML = tempValue;
//              desc.innerHTML = descValue;
   
//              console.log(data);
//          })
//       fetch('')
     
    
//      })
// });

// Promise.all()

var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
    console.log(results);
  });

  
}
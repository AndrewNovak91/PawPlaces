$(document).ready(function() {
 var button = document.querySelector('.button');
  var inputValue = document.querySelector('.inputText');
  var name = document.querySelector('.name');
  var desc = document.querySelector('.desc');
  var temp = document.querySelector('.temp');
  
  button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value +"&units=imperial"+
   '&appid=b909eeec74d5f5fb27fb07d14f5fec29')
      .then(response => response.json())
      .then(data => {
          var nameValue = data['name'];
          var tempValue = data['main']['temp'];
          var descValue = data['weather'][0]['description'];
  
          name.innerHTML = nameValue;
          temp.innerHTML = tempValue;
          desc.innerHTML = descValue;

          console.log(data);
      })
  
  
 
  });


  // giphy API
var giphyURL = "https://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=eUdl8lLKA2perpUVPr1CqVdDtpKVVPMP&limit=20";
$.ajax({
  url: giphyURL,
  method: "GET"
})
.then(function(response) {
  console.log(response);
  var results = response.data;
  for(i = 0; i < 5; i++) {
    var addGif = $("<img>").addClass("giphyImage").attr("src",response.data[i].images.original.url);
    $(".dogGif").append(addGif);
  }
  console.log(response.data[i].url);
});  

  // Google Maps API search for Parks
  var parkURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.4993,-81.6944&radius=1500&type=park&keyword=dog-friendly&key=AIzaSyDcao6rtH4hlXDKhZNtUPkNZKGsMKXMiMc"
  $.ajax({
      url: parkURL,
      method: "GET"
  })
      .then(function (response) {

        var results = response.results[0].name;

        for(i = 0; i < 5; i++) {
         
          var addParks = $("<li>").text(response.results[i].name);
          $("#parks_list").append(addParks);

        }

          console.log(response);

      });


    //google maps API for Restaurants
    var restURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.4993,-81.6944&radius=1500&type=restaurant&keyword=dog-friendly&key=AIzaSyDcao6rtH4hlXDKhZNtUPkNZKGsMKXMiMc"
    $.ajax({
        url: restURL,
        method: "GET"
    })
        .then(function (response) {
          var addRest = response.results[0].name;

          

          for(i = 0; i < 5; i++) {
         
            var addRest = $("<li>").text(response.results[i].name);
            $("#rest_list").append(addRest);
  
          }

          console.log(response);

        });
})
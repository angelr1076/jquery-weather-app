$(document).ready(function ($) {
  //Return the user's longitude and latitude on page load using HTML5 geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var long = position.coords.longitude;
         var lat = position.coords.latitude;
   
  //FCC API pass-through. No API key necessary.     
          var api ="https://fcc-weather-api.glitch.me/api/current?lat=" +lat+ '&lon=' +long;
  
        $.getJSON(api, function (data) {
          
          var city = data.name;
          var kTemp = Math.round(data.main.temp);
          var weatherType = data.weather[0].main;
          var icon = data.weather[0].icon;
  
          //Convert Kelvin to Fahrenheit
          cTemp = Math.round(kTemp) + " °C";
          fTemp = Math.round((kTemp * 9/5) + 32) + " °F";
             // (cTemp * 9/5) +32;
          //Convert Kelvin to Celsius
          var tempSwap = true;
          $(".button").click(function () {
      
            // tempSwap set to true;
            if (tempSwap === false) {
              $(".fTemp").html(cTemp);
              tempSwap = true;
            } else {
              $(".fTemp").html(fTemp);
              tempSwap = false; //toggle back and forth from F to C
            }
          });
  
          $(".location").html(city);
          $(".fTemp").html(fTemp);
          $(".description").html(weatherType);
          $(".icon").html(icon);
   
       
        });
          
      });
     }
  });
  
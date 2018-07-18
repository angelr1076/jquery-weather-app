$(document).ready(function ($) {
  //Return the user's longitude and latitude on page load using HTML5 geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var long = position.coords.longitude;
          var lat = position.coords.latitude; 
  //FCC API pass-through. No API key necessary.     
        var api =
            "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;

  
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

                    if (weatherType === "Clear" || weatherType === "clear sky" || weatherType === "calm") {
            $("body").css("background", "url(https://images.unsplash.com/photo-1500110552734-efdb5e2b4e08?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00f6c4bf847edc19bb6da0e47afe61ee&auto=format&fit=crop&w=1489&q=80)");
            $("body").css("background-size", "cover");
          }
        
          else if (weatherType === "Rain" || weatherType === "rain" || weatherType === "showers" || weatherType === "shower rain" || weatherType === "light rain") {
            $("body").css("background", "url(https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=950c1c30e781da5fa29e7db2f185c360&auto=format&fit=crop&w=1050&q=80)");
            $("body").css("background-size", "cover");
          }
          
        else if (weatherType === "thunderstorm" || weatherType === "Thunderstorm" || weatherType === "thunder") {
            $("body").css("background", "url(https://images.unsplash.com/photo-1516188239414-6bfa485294d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06592b7fb0b963a5ce907ffc74a4a045&auto=format&fit=crop&w=751&q=80)");
            $("body").css("background-size", "cover");
          }
  
          else if (weatherType === "Clouds" || weatherType === "clouds" || weatherType === "broken clouds" || weatherType === "overcast clouds" || weatherType === "few clouds" || weatherType === "scattered clouds") {
            $("body").css("background", "url(https://images.unsplash.com/photo-1455735459330-969b65c65b1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7a67f06c27804552d6bbd40afe0961e&auto=format&fit=crop&w=1052&q=80)");
            $("body").css("background-size", "cover");
          }
  
          else if (weatherType === "Snow") {
            $("body").css("background", "url(https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d332f7eef26311a3d8b72ecbf5c87031&auto=format&fit=crop&w=967&q=80)");
            $("body").css("background-size", "cover");
          }
          
          else if (weatherType === "mist" || weatherType === "Mist") {
            $("body").css("background", "url(https://images.unsplash.com/photo-1415860407914-fe42e09b4f77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35717e2e5ffbc5dd8438987a0d85de7d&auto=format&fit=crop&w=750&q=80)");
            $("body").css("background-size", "cover");
          }

          else {
            $("body").css("background", "url(https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b2b3eeca79a80926667ec71b01eac12&auto=format&fit=crop&w=1050&q=80)");
            $("body").css("background-size", "cover");
          }
        });
          
      });
    }
  });
  
$(document).ready(function ($) {
  if (navigator.geolocation) {

  //Return the user's longitude and latitude on page load using HTML5 geolocation API

  window.onload = function () {
      var exactLocation;
    function getCurrentLocation(location) {
      exactLocation = location;
      lat = exactLocation.coords.latitude;
      long = exactLocation.coords.longitude;
      console.log(lat, long);

      //AJAX request
      var api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&type=accurate&APPID=631fc5e83394dd6b6af09aa694fbd469";


      console.log(api);
      $.getJSON(api, function (data) {
        
        var city = data.name;
        var kTemp = data.main.temp;
        var weatherType = data.weather[0].main;
        var icon = data.weather[0].icon;

        //Convert Kelvin to Fahrenheit
        fTemp = ((kTemp) * (9 / 5) - 459.67).toFixed(1) + " °F";
        //Convert Kelvin to Celsius
        cTemp = (kTemp - 273).toFixed(1) + " °C";
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
        $(".icon").data(icon);
  


        // if (kTemp >= 299) {//78.53 F
        //   $("body").css("background-image", "url(http://hdqwalls.com/wallpapers/beach-illustration-v4.jpg)");
        // }
       
        // else if (kTemp <= 298.99444 && kTemp >= 288.706) { //78.519 thru 60 F
        //   $("body").css("background-image", "url(https://png.pngtree.com/element_origin_min_pic/17/09/10/e015333487bd004bc0f7dae3bfefeb9c.jpg)");
        //   $("body").css("background-size", "1200px");
        // }

        // else if (kTemp <= 288.705 && kTemp >= 277.594) { //59.999 thru 40 F
        //   $("body").css("background-image", "url(https://png.pngtree.com/element_origin_min_pic/17/04/17/d327ac51e322d9c6e75edd7c8ab01484.jpg)");
        //   $("body").css("background-size", "1200px");
        // }

        // else if (kTemp <= 277.593 && kTemp >= 0) { //39.999 thru 0 F
        //   $("body").css("background-image", "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/S15GBCm/nice-illustration-winter-snowscape-loop-cute-cartoon-snowman-in-the-snow-with-space-for-your-text-or-logo-christmas-and-festive-holiday-concept-new-year-background_bdk9ysw___F0000.png)");
        //   $("body").css("background-size", "1500px");
        // }
     
      });
        
    }
  
    navigator.geolocation.getCurrentPosition(getCurrentLocation);

  };
}
});

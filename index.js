$(function () {
    $("#loadw").click(function () {
        $("#show").empty();
        $("#show").show();
        var city = $("#city").val();
        var d = new Date();
        var date = d.toDateString();
        console.log(date);


        var provincS = "<h2><img id = 'piclo' src='lo.png' alt=''><b>" + city +" | "+"<img id = 'piclo' src='calender.png' alt=''><b>"+date+ "</b></h4>";

        $("#show").append(provincS);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8fa2029bb98a470196e1be09a67414b6";

        $.get(url, function (data) {
          var picCheck = data.weather[0].main;
          if (picCheck == "Clouds") {
              var picShow = "cloud.png";
          }
          if (picCheck == "Rain") {
              var picShow = "heavy_rain.png";
          }
          if (picCheck == "Clear") {
              var picShow = "Sun.png";
          }
          if (picCheck == "Thunderstorm") {
              var picShow = "thunder.png";
          }
          if (picCheck == "Mist") {
              var picShow = "fog.png";
          }
          if (picCheck == "Drizzle") {
              var picShow = "drizzle.png";
          }
          console.log(data);
            var detail = "<img class = 'font' src='" + picShow + "' alt=''><h2><p id = 'text'><b>"
            + data.weather[0].description + "<h4><b><br>" + "<tr><td><img src='Celsius.png' alt=''></td><td>"
             + ((data.main.temp) / 10).toFixed(2) + " °C</td></tr>"  + "<tr><td><img src='2.png' alt=''></td><td>"
              + data.main.pressure + " hPa</td></tr>" + "<tr><td><img src='1.png' alt=''></td><td >"
              + data.main.humidity + " %</td></tr></table>";
            $("#show").append(detail);
        });
    });
});

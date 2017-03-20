//Search more cities....
$(document).ready(function(){
	$(".btn").click(function(){
		var city =$("#city").val();
		if(city != ''){
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?q='+city + "&units=metric" + "&units=imperial"+"&APPID=2c8459c3dbea9a2c30318bd4ac76b3ac",
				type:"GET",
				dataType:"jsonp",
				success:function(data){
					city = data.name ;
					country = data.sys.country;
					temperature = data.main.temp;
					tempInF = temperature * 9 / 5 + 32; 
					tempInF = tempInF.toFixed(2);
					weather = data.weather[0].icon;
//weather icon in png format...	
var png = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n'];
//change the background image according to weather icon....	  
var bodyImages = [ /*01d-clearSkyDay*/ '1.gif',
        /*01n*/
       '8.gif',
        /*02d-fewCloudsDay*/
        'cb.jpg',
        /*02n*/
        'https://media.giphy.com/media/12AwtlTuPlF29y/giphy.gif',
        /*03d-scatteredClouds*/
        'https://media.giphy.com/media/mno6BJfy8USic/200w_d.gif',
        /*03n*/
        'https://secure.static.tumblr.com/1046ae5f9a312353e0e3fb7db09358d2/8mzaxx3/NO0nvwgn3/tumblr_static_tumblr_static_filename_640.gif',
        /*04d-brokenCloudsDay*/
        'http://33.media.tumblr.com/17701ff159c89f229a5d2e2d456a09cd/tumblr_nrnu936NG61uocsx1o1_500.gif',
        /*04n*/
        'https://s-media-cache-ak0.pinimg.com/originals/1c/2b/69/1c2b6962e17d68d89bb557286f284479.jpg',
        /*09d-showerRainDay*/
        '9.gif',
        /*09n*/
        'https://lh6.googleusercontent.com/-P2VgcdsUTO0/UzGzaysZSmI/AAAAAAABkQ8/sRI5VLc0bGA/w500-h250/DANCING%2BIN%2BD%2BRAIN.gif',
        /*10d-rainDay*/
        '7.gif',
        /*10n*/
        '5.gif',
        /*11d-thunderstorm*/
        'http://2.bp.blogspot.com/-avToLxXADcY/VCVpvgQ2NvI/AAAAAAAAA4o/p6w2ZkJ-eMw/s1600/18zr87vckdbsugif.gif',
        /*11n*/
        '2.gif',
        /*13d-snowDay*/
        'https://media.giphy.com/media/Yy26NRbpB9lDi/giphy.gif',
        /*13n*/
        'https://68.media.tumblr.com/170eb832a786ab22af26428779a11590/tumblr_oicjvutn8N1ujivwjo1_500.gif',
        /*50d-mist*/
        '3.gif',
        /*50n*/
        'https://49.media.tumblr.com/db3b68e5ccc2ebe25094b1e4c92aa0e2/tumblr_n18bh30XJk1qh588ko1_500.gif',
      ];
      //iterate png number to match up with image
      var imageArray = [];
      for (var i = 0; i < png.length; i++) {
        for (var j = 0; j < bodyImages.length; j++) {
          if (png[i] == weather) {
            imageArray.push(bodyImages[j]);
            $('body').css('background-image', 'url(' + imageArray[i] + ')');
		 $('body').css('color', 'colour[i]');
          }
        }
      }
	//variables
		windSpeed = data.wind.speed;
		humidity =data.main.humidity;
		minTemp = data.main.temp_min;
		maxTemp = data.main.temp_max;
	////print the varibles in respective places
		$("#locatn").html("<h3 style='font-weight:bold'>" +city + "," + country+"</h3>" );
		$("#temp").html(temperature);
		$("#degF").click(function(){
			$("#degC").css("color","white");
			$(this).css("color","red");
			$("#temp").html(tempInF);
		});
		$("#degC").click(function(){
			$("#degF").css("color","white");
			$(this).css("color","red");
			$("#temp").html(temperature);
		});
		$("#icon").html("<h3 style='font-weight:bold'><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png' width='70' height='70'>"+data.weather[0].main+"</h3>");
		$("#param1").html("<p>Wind : " + windSpeed  +"m/s" +" "+'<img src="https://cdn0.iconfinder.com/data/icons/large-weather-icons/256/Cold_wind.png" width="50" height="50">'+"<br> Humidity : " + humidity+"%" +" "+'<img src="https://cdn4.iconfinder.com/data/icons/weather-conditions/512/medium_rain-512.png" width="40" height="40">'+"</p>");
		$("#param2").html("<p>minTemp : " + minTemp +"&degC" +","+ "maxTemp : "+ maxTemp +"&degC"+ "</p>");
		//$("#param2").html("<p>Humidity : " + humidity +"%"+"</p>");
		//$("#param3").html("<p>Sunrise : " + sunrise + " "+"Sunset : "+ sunrise + "</p>");
		//$("#box1").html(widget);
	}
			});
		}
	
 else { 
         alert("Field should not be empty");
    }
	});
	});	

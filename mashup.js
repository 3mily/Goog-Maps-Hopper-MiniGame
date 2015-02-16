function initialize() {
  var lhl = new google.maps.LatLng(49.2818445,-123.1081608);
  var myLatlng2 = new google.maps.LatLng(49.2818445,-123.1081608);
  var mapOptions = {
    zoom: 4,
    center: lhl
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">Location Name</h1>'+
      '<div id="bodyContent">'+
      "yo"+     
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: lhl,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

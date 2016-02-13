function initMap() {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.768874, lng: -122.482981},
    //scrollwheel: false,
    zoom: 17
  });



  // Specify features and elements to define styles.
  //var styleArray = [];
  var pos;
  //grabs current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(map);
      map.setCenter(pos);
    });
  }
}

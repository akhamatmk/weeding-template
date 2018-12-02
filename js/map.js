function myMap() {

var myLatlng = new google.maps.LatLng(-7.230756,110.582098);
var mapOptions = {
  zoom: 14,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Lokasi Pernikahan"
});

// To add the marker to the map, call setMap();
marker.setMap(map);

google.maps.event.addListener(marker, 'click', function() {
    window.location.href = "https://goo.gl/maps/8p17hhqzEtx";
});

}


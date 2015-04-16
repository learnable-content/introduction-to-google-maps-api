//Global map variable
var map;

//Function run on DOM load
function loadMap() {

    //Set the map options
    var mapOptions = {

        //Zoom on load
        zoom: 11,

        //Map center
        center: new google.maps.LatLng(40.748817,-73.985428)

    };

    //Get the id of the map container div
    var mapId = document.getElementById('map');

    //Create the map
    map = new google.maps.Map(mapId,mapOptions);

}
  
//Load the map
google.maps.event.addDomListener(window, 'load', loadMap());
       




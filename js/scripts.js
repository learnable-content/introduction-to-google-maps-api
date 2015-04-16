//Global map variable
var map;

//Get the location to display the coordinates
var lat = document.getElementById('latcoords');
var lng = document.getElementById('loncoords');

//Function run on DOM load
function loadMap() {
    
    //Set the map options
    var mapOptions = {

        //Zoom on load
        zoom: 11,

        //Map center
        center: new google.maps.LatLng(40.748817,-73.985428),
        
        //Limit min/max zoom
        minZoom: 2,
        maxZoom: 18,

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [google.maps.MapTypeId.ROADMAP,
                         google.maps.MapTypeId.SATELLITE,
                         google.maps.MapTypeId.HYBRID,     
                         google.maps.MapTypeId.TERRAIN]                   
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN,       

        //0 to 45deg, only valid for satellite and terrain
        tilt: 0,

        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_TOP
        },

        panControl: true,
        streetViewControl: true,

        //Overview map
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: true
        },

        //Set the map style
        styles: shiftWorkerMapStyle 
    };

    //Get the id of the map container div
    var mapId = document.getElementById('map');

    //Create the map
    map = new google.maps.Map(mapId,mapOptions);
    
    //Update the lat/lng on load of the map center
    updateCurrentLatLng(map.getCenter());
    
    //Update the URL with the current location
    updateUrlLocation(map.getCenter(), map.getZoom());
    
    //Add the event listeners
    mapEventListeners();
       

}

// Add the map event listeners
function mapEventListeners() {
    
    // Mouse move updates the coordinates 
    var mouseMoveChanged = google.maps.event.addListener(map, 'mousemove',
        function(event) {            
        
            //Update the coordinates
            updateCurrentLatLng(event.latLng);
            
        }
    );
    
    
    var mouseRightClick = google.maps.event.addListener(map, 'rightclick',
        function(event) {
            
            //Get the map zoom and increment
            var z = map.getZoom()+1;
        
            //Increment the zoom or reset
            if(z < 16) {                
                map.setZoom(z);
            }
            else {
                map.setZoom(11);
            }
        
            //Set the map center to the mouse click
            map.setCenter(event.latLng);
        }
    );
    
    //Wait for map to load
    var listenerIdle = google.maps.event.addListenerOnce(map, 'idle',
        function() {
            alert('Map is ready!');
        }
    );
  
    //Drag End
    var listenerDragEnd = google.maps.event.addListener(map, 'dragend', 
        function() {
            updateUrlLocation(map.getCenter(), map.getZoom());
        }
    );

    //Zoom changed
    var listenerZoomChanged = google.maps.event.addListener(map, 'zoom_changed',
        function() {
            updateUrlLocation(map.getCenter(), map.getZoom());
        }
    );
    
}

// Update the position of the mouse in latitude and longitude
function updateCurrentLatLng(latLng) {

    //Update the coordinates
    lat.innerHTML = latLng.lat();
    lng.innerHTML = latLng.lng();
    
}

//Update the URL with the map center and zoom
function updateUrlLocation(center, zoom) {
    
    var url = '?lat='+center.lat()+'&lon='+center.lng()+'&zoom='+zoom;   
    
    //Set the url
    window.history.pushState({center: center, zoom: zoom }, 'map center', url);  
}

//Load the map
google.maps.event.addDomListener(window, 'load', loadMap());
       




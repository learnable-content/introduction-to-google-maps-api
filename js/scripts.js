//Global map variable
var map;

//Function run on DOM load
function loadMap() {
    
    //Set the map options
    var mapOptions = {

        //Zoom on load
        zoom: 11,

        //Map center
        center: new google.maps.LatLng(40.6413111,-73.77813909),
      
        //Set the map style
        styles: shiftWorkerMapStyle 
    };

    //Get the id of the map container div
    var mapId = document.getElementById('map');

    //Create the map
    map = new google.maps.Map(mapId,mapOptions);

    //Marker creation
    var newMarker = this.addMarker();
        
}

//Add a marker to the map
function addMarker() {
        
    //Create the marker (#MarkerOptions)    
    var marker = new google.maps.Marker({
          
        //Position of marker
        position: new google.maps.LatLng(40.6413111,-73.77813909),
        
        //Map
        map: map,                
        
        //Icon details
        icon: {
            
            //URL of the image
            url: 'img/airplane-green.png',
            
            //Sets the image size
            size: new google.maps.Size(32,32),
            
            //Sets the origin of the image (top left)
            origin: new google.maps.Point(0,0),
            
            //Sets the anchor (middle, bottom)
            anchor: new google.maps.Point(16,32),
            
            //Scales the image
            scaledSize: new google.maps.Size(32,32)
        },
      
        //Set the animation (BOUNCE or DROP)
        animation: google.maps.Animation.DROP,
        
        //Sets whether marker is clickable
        clickable: true,
        
        //Drag marker
        draggable: true,
        
        //Set the cross underneath the draggable marker        
        crossOnDrag: false,
        
        //Sets the opacity
        opacity: 1.0,
        
        //Sets the title when mouse hovers
        title: 'NEW YORK NY (JFK)',
        
        //Set visiblility
        visible: true,
        
        //Sets the zIndex if multiple markers are displayed
        zIndex: 1
        
    });

    return marker;
}

//Load the map
google.maps.event.addDomListener(window, 'load', loadMap());
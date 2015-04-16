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
    
    //Adds the infowindow
    addInfoWindow(newMarker);
    
    //Trigger marker infowindow
    google.maps.event.trigger(newMarker, 'click');
    
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
        //animation: google.maps.Animation.DROP,
        
        //Sets whether marker is clickable
        clickable: true,
        
        //Drag marker
        draggable: true,
        
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

//Associate an infowindow with the marker
function addInfoWindow(marker) {
        
    //Content string 
    var contentString = '<div class="infowindowcontent">'+
        '<div class="row">' +
        '<p class="total greenbk">78.3%</p>'+
        '<p class="location">NEW YORK NY</p>'+
        '<p class="code">JFK</p>'+
        '</div>'+
        '<div class="data">'+
        '<p class="tagbelow">Avg On-Time</p>'+
        '<p class="label">Arrivals</p>'+
        '<p class="details">76% (8,590)</p>' +
        '<p class="label">Departures</p>'+
        '<p class="details">80.5% (8,589)</p>' +        
        '<p class="coords">40.6413111 , -73.77813909</p>' +
        '</div>' +
        '</div>';

    //Create the infowindow
    var infoWindow = new google.maps.InfoWindow({
        
        //Set the content of the infowindow
        content: contentString,
        
        //Pan the map if infowindow extends offscreen
        disableAutoPan: false,
        
        //Set the max width
        maxWidth: 300,
        
        //Set the zIndex when overlaying
        zIndex: 1
        
    });

    //Add click event listener
    google.maps.event.addListener(marker, 'click', function(e) {
        
        //Open the infowindow on click
        infoWindow.open(map,marker);
    });
}

//Load the map
google.maps.event.addDomListener(window, 'load', loadMap());
       





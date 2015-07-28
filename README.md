![](Introduction_to_Google_Maps_API_handouts/headers/GoogleMaps Lesson 6.1.jpg)
# Introduction

In the previous lessons you learned how to create a map, customize the map options, listen and interact with map events. In this lesson we'll learn how to create and place markers on the map, along with customizing those markers with your own images.

# Create and place markers

Let's start by adding a simple marker to the map. I've created a new function called `addMarker` that will be responsible for creating the marker and returning the marker object, which we will store in a variable called new marker.

To create a new marker, we'll take advantage of the marker class. The constructor of the marker class requires that we pass a set of options, defining the position, setting the particular map that you want the marker to be associated with, and then customizing the icon.

The `position` takes a latitude and longitude coordinate:

```js
position: new google.maps.LatLng(40.6413111,-73.77813909)
```

Right now, this is our map center, so this will show up in the middle of the map.

he second property is the `map`:

```js
map: map
```

As you remember, we have a global variable that's defined as `map`, so we're going to attach that to this map property.

# Customize markers

I've created a folder in the project called *img*, and inside there are four different colors of airplanes. So let's add a green airplane icon instead of the generic red icon.

Utilize the `icon` property:

```js
icon: {
  url: 'img/airplane-green.png',
  
  size: new google.maps.Size(32,32),
  
  origin: new google.maps.Point(0,0),
  
  anchor: new google.maps.Point(16,32),
  
  scaledSize: new google.maps.Size(32,32)
}
```

The first option is the URL of the particular image that we want to use.

`sizd` specifies the size of that particular image.

`origin` is just a position within the image that we want to show. `(0,0)` counts from the top left corner of the image (the bottom right is going to be `(32, 32)` for this example).

The `anchor` position is the position within the image. That will correspond to the location of the marker on the map. Right now, the default is the center point at the bottom of the image.

`scaledSize` parameter is used to specify the image size after you scale it. It can be used to stretch or shrink an image to match the size that you want to come up with.

You can also you can use the methods that are associated with the marker, after the marker object itself has already been created.

`setMap` allows you to set a marker to a map passed in as an argument.

`setVisible` is useful if you have controls where you want to toggle the icons on and off. Set it to `true` or `false`. 

If you refer to the API reference, there are a bunch of different methods that you can use for interacting with the marker.
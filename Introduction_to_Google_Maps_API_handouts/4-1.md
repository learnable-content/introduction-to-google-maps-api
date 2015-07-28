![](headers/GoogleMaps Lesson 4.1.jpg)
# Introduction

In the last lesson, we only set the two required properties (`center` and `zoom`) in the map options. In this lesson, we will learn how to control the size and positioning of the map controls, including pan, zoom and street view. We will also learn how to set the default map layer on load, to satellite or terrain, for example. Finally we will learn how to set the zoom bounds and add an overview map.

# Control size and positioning of controls

Let's start by taking a look at the `minZoom` and `maxZoom` properties in the map options. By default user can zoom all the way in and all the way out of any location, however by setting the min and the max zoom, you can only zoom in out to a certain level. This is useful if you have a specific overlay, say an image overlay or markers, specific markers that only appear at a certain zoom level and you want to force the user to stay at that level so they get the most information from the map.

Go ahead and add those properties:

```js
minZoom: 10,
maxZoom: 12
```

The user now only has the ability to go to three different zoom levels.

The next control we're going to look at is the map type control. This control is found in the upper right corner. By default it's set to the "map" option, and if you click on it, you have the ability to set the map to the "terrain" or "satellite".

```js
mapTypeControl: true,
mapTypeControlOptions: {
style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
mapTypeIds: [google.maps.MapTypeId.ROADMAP,
  google.maps.MapTypeId.SATELLITE,
  google.maps.MapTypeId.HYBRID,
  google.maps.MapTypeId.TERRAIN],
position: google.maps.ControlPosition.TOP_RIGHT
```

I've changed the style to a dropdown using the `mapTypeControlStyle`. The `mapTypeId` allows you set the different base map layer options that are available to the user. So you can see I've set the roadmap which is the default, satellite, hybrid, and then terrain. There are four different types of map based layers you can specify.

# Set map base layers

* The first map base layer is the **roadmap** and it's what you normally see when you load up Google Maps.
* The second one is a **satellite** view. It's a combination of satellite images that relate onto the map.
* The third is a **hybrid**, and it's a mixture of both the roadmap and satellite view. So, it has the satellite base layer, but then it shows roads over top of it.
* The **terrain** layer shows elevations and physical terrain features.

So all four of these are available and you can set them as your default base layer.

There's also `position` option. I've kept the controls on the top right, but there's various positions that you can set. There are 12 different positions the map controls can take around the map.

# Set zoom bounds

There are similar options for zoom control:

```js
zoomControl: true,
zoomControlOptions: {
	style: google.maps.ZoomControlStyle.SMALL,
	position: google.maps.ControlPosition.RIGHT_TOP
}
```

Here I've changed zoom control to a small control and also moved it to the right hand top corner.

Now let's say you didn't want the zoom control. You could set `zoomControl` property to `false` and then it wouldn't show up on the map. Removing controls from the map could be helpful if you're going on to a mobile device or if you are limited in real estate.

Let's take a look at the pan controls.

```js
panControl: true,
panControlOptions: {
	position: google.maps.ControlPosition.TOP_LEFT
}
```

They are very similar. 

# Create overview map

There is also an overview map that provides the user with a zoomed out view and a more control about the particular region they're looking at. This has a similar structure:

```js
overviewMapControl: true,
overviewMapControlOptions: {
	opened: true
}
```

You will see some kind of a regional view to pan around the map. It just provides a nice overview of where you're looking to give the user frame of reference.

The Tilt options allows you, when you have a satellite or train layer, to set the angle to either zero or 45 degrees when you're zoomed in looking at a particular location.

```js
tilt: 0
```

In order to check out the tilt parameter, go somewhere where there's satellite imagery that supports this functionality. Get rid of the min, max, and zoom limits for a moment.
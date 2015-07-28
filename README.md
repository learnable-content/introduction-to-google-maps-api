![](Introduction_to_Google_Maps_API_handouts/headers/GoogleMaps Lesson 6.2.jpg)
# Introduction

At this step you will learn about some additional marker options as well as marker's events and methods that are available for interacting with the marker class.

# Marker Properties

The first one we'll look at is `animation`. With it you can set an animation on the marker itself. These animations are useful to draw the user's interest to a particular icon:

```js
animation: google.maps.Animation.DROP
```

`clickable` indicates whether the marker can be clicked or not, and so it will fire a click event:

```js
clickable: true
```

Setting `draggable` to `true` allows the user to click and hold on a marker, and then move it around the map.

```js
draggable: true
```

This is useful if you want your users to create or place points of interest or to modify the position of a particular location.

Along with the `draggable`, there's `crossOnDrag`, that controls whether a little cross should appear as the user drags the marker. By default it's set to `true`, but you disable it:

```js
crossOnDrag: false
```

Use `opacity` to control the opacity of the marker icon itself. It accepts values from 0 to 1 (for example, setting `0.5` makes the marker 50% opaque).

```js
opacity: 1.0
```

`title` show a pop-up when you hover over the icon:

```js
title: 'NEW YORK NY (JFK)'
```

`visible` shows or hides marker on a map:

```js
visible: true
```

`zIndex` let's you set the ordering of markers as they appear on the map. A higher value means that a marker will appear in front of a marker with a lower value:

```js
zIndex: 1
```

Markers by default are displayed based on their vertical position, so markers that appear lower on the screen, will appear in front of markers that are higher up on the screen.

# Marker Events

Let's take a look at some of the events associated with the marker. A lot of them are the same types of events that we discussed with a map in Lesson 5.1.

There are some change properties that fire an event when that particular property has been changed (such as animation, clickable, cursor, draggable, icon, position, shape, title, visible and index). 

Then we have events that are similar to the map events such as click or double click, right-click. These events are useful for dynamically responding to user's actions applied to the marker.
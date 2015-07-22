![](headers/GoogleMaps Lesson 4.2.jpg)
# Introduction

Google offers ability to create custom map styles of the base map layers so that you can style the landscape, roads, water, points of interest, transit routes, and geographic boundaries. The map style is configured by creating an array of features and styles, and then applying that to the style's option on the map.

# Custom map styles

In the API reference, let's refer to the `mapTypeStyle` object properties. There are three different properties we're going to discuss when we're styling the map: the feature type, the element type, and the stylers.

**Features** refer to elements on the map that you want to style, such as of the landscape, point of interest, roads, water, the main elements on the map that you'll find. You can style their geometry, how they're filled, the stroke, or the outline around it, the different labels and then underneath labels,the icon, the text, and then the text fill and stroke. The `mapTypeStyler` object is used for that.

# Create and share map styles

First of all, create a `mapStyle` object:

```js
var mapStyle = [
  {
    'stylers':[
      {'saturation':-100},
      {'gamma':1}
    ]
  },
  {
    'elementType':'labels.text.stroke',
    'stylers':[
      {'visibility':'off'}
    ]
  },
  {
    'featureType':'road',
    'elementType':'geometry',
    'stylers':[
      {'visibility':'simplified'}
    ]
  },
  {
    'featureType':'water',
    'stylers':[
      {'visibility':'on'},
      {'saturation':50},
      {'gamma':0},
      {'hue':'#50a5d1'}
    ]
  },
  {
    'featureType':'landscape',
    'elementType':'all',
    'stylers':[
      {'color':'#e2e2e2'}
    ]
  }
];
```

Now assign it to the `style` property for the `mapOptions`:

```js
styles: mapStyle
```

You'll notice a major change from the style we had previously. If a feature type or element type is not defined, then that styler is applied as a global default to all features or elements. This is the case on our first styler, where we're applying the saturation and gamma adjustment. A gamma 1 means there is no change to the lightness and we will decrease the color saturation by 100 by applying minus 100.

In the second style, we are turning off the visibility of the stroke around the label text. Since a feature type is not defined, this will be applied to all features on the map.

The next three stylers apply to road, water, and landscape. For road geometry, we are enabling simplified visibility to turn off the secondary roads and only display main roads on the map. If you were to turn this visibility to on, you'll see that all the secondary roads are displayed.

The next feature type is for the water. We apply hue color to the water in this color, set the gamma to 0 and increase the water saturation by 50%. We also turn the visibility to override the global styler.

The final styler is for the landscape.

Styling the map requires adjusting these different style options until you've achieved the map style that matches your vision. I found that it's helpful to use a predefined style as a starting point, and then make adjustments in order to fit the style that you're interested in achieving. [snazzymaps.com](http://snazzymaps.com) offers a great repository of styles.
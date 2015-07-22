![](headers/GoogleMaps Lesson 2.3.jpg)
# Introduction

Google has provided a number of resources to help you developing web pages using the Google Maps JavaScript API. At this step we will discuss some of the main reference materials.

# API Reference

The API reference ([developers.google.com/maps/documentation/javascript](https://developers.google.com/maps/documentation/javascript/)) allows you to examine the classes, methods, events, and properties that are available for use. As you go through this course I recommend you having the API reference open and refer to it as you go through the lesson code.

As you load the page, you'll see that you can select the different versions of the reference. In the release version there is a note here that tells you the current release version and when it was released. This is useful if you want to use the fixed version.

So let's take a look at one example of a class - the `Map` class.

# Map class

As you click on the different classes, they're all linked, which is nice, so you can follow along and if there's a class or a method that you don't know about, you can just click on it.

The `Map` class is the main class where you instantiate the map. The details about it in the reference talk about the constructor. It tells that you need to pass in the `mapDiv` and also the `mapOptions` that you want to set up.

When you access the API, you will use the namespace `google.maps`. So for example, when you instantiate the `Map` object, you will call `google.maps.Map` and then pass in the required parameter.

There are a handful of other methods. For example, `getCenter` is a very useful method: it returns the center point of the map. `getZoom` is useful to get the current zoom. We'll talk about these methods as we go through the course and, you'll see some examples in the code.

Along with getting, there's setter methods, where you can set the center or zoom, for example.

Along with the methods, there's also properties that you can set, and events. Events are configured so when the bounds change, for example, an event is fired, and you can attach a handler to that event.

So again, the API reference is a very useful document. You'll be constantly utilizing it throughout your development.

# Code samples

Google also provides code samples for a number of the API features. Often times the samples help put the reference documentation into context to make the implementation clear to you.

In the sidebar menu on the left, you can see that when you click on Code Samples, you get a listing of the samples grouped for quick reference. There are a lot of simple examples that demonstrate how to implement a certain feature.

# Showcase examples

Google provides some showcase examples which are really useful to see what others are doing with the map and to get some inspiration for your own project. You can look at what people are doing on mobile, there are travel websites, fitness, store locator. I encourage you to take a look at these examples and implementations to learn how others are utilizing Google Maps.

# Forums/Questions

Google used to maintain their own forums, but has since migrated everything over to Stack Overflow. In Stack Overflow, you can search for answers or post your own questions on the Google Maps API using the tag `google-maps-api-3`. From the issue tracker, you can browse and file bug and feature requests. If you spot a bug in the API or are having problems, this is a good place to start.

As new versions of the API are released, it is helpful to refer to the changelog. The changelog will highlight bug fixes and new features as they are being released. Based on the changelog, you can set the version of the API that you are interested in using. You also see as features get moved from the experimental channel over to the staple release.
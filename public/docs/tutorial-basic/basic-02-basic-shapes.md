---
layout: default
title: 'Basic Shapes'
parent: Basic Tutorial
---

# Basic Shapes

The simple way to add shapes using D3.js is by adding an `svg` component, which is native to html. 
The `svg` component is the container for SVG graphics, and we start by adding this component
to the html, setting its height and width as you can see in the example below.

We can then append a rectangle to this SVG, 
but since the rectangle is larger than the containing SVG element, and also since we moved it
rightward and downward (`x` and `y`), only parts of it are shown. 
So we need to make sure that the SVG container is larger than whatever shape we want it to hold.

```javascript
{% loadfile assets/js/02/01-basic-rect.js %}
```
<div id='basic-shapes-01'>
</div>
<script src="{{ '/assets/js/02/01-basic-rect.js' | relative_url }}"></script>

To add multiple shapes we can use a for loop:
```javascript
{% loadfile assets/js/02/02-multi-rect.js %}
```

<div id='basic-shapes-02'>
</div>
<script src="{{ '/assets/js/02/02-multi-rect.js' | relative_url }}"></script>

However, in the spirit of data-driven design, D3.js has the ability to draw multiple shapes
based on an array:
```javascript
{% loadfile assets/js/02/03-rect-from-data.js %}
```
<div id='basic-shapes-03'>
</div>
<script src="{{ '/assets/js/02/03-rect-from-data.js' | relative_url }}"></script>
The most important thing to consider in the above code is that when we bind data to a D3 element,
we can then pass an anonymous function with parameter `(d,i)` where `d` is the element and `i` 
is its index. There is one more parameter, `nodes` that refers to the whole dataset. 
In the example below, we use `d3.select(nodes[i-1]).attr('cy')` to get the previous circle's `cy` attribute.

```javascript
{% loadfile assets/js/02/04-circle-from-data.js %}
```
<div id='basic-shapes-04'>
</div>
<script src="{{ '/assets/js/02/04-circle-from-data.js' | relative_url }}"></script>

We cannot directly use `cy` from `nodes[i-1]` since it is no longer an int (it is a DOM element), 
hence why we need to use `d3.select()`. Another, possibly simpler method, is to use the data that
was used to construct the node (from the `data` array), using
```javascript
d3.select(nodes[i-1]).datum()
```



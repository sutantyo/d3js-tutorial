---
layout: default
title: 'Basic Shapes'
parent: Basic Tutorial
nav_order: 2
---

# Basic Shapes

The usual method for adding shapes in D3.js is by first adding an `svg` component, 
which is a native html container for SVG graphics, and then add SVG shapes
to it.

In the first example below, we start by adding the SVG element of size
200 by 200 pixels. 
We then append a rectangle with a larger dimension of 300 by 200 pixes to the container, and also move the x and y coordinates a little (the coordinate where the shape is located).
We can see how only part of the rectangle is shown. In general, we should make sure that the SVG container is large enough to display the elements contained within it.


```javascript
{% loadfile assets/js/02/01-basic-rect.js %}
```
<div id='basic-shapes-01'>
</div>
<script src="{{ '/assets/js/02/01-basic-rect.js' | relative_url }}"></script>

In the above example, we call `attr()` once for each attribute we want to set.
We can also call `attr()` once and passing it an object with key-value pairs, 
but the style with multiple `attr()` calls seem to be more common, and I find
it easier to edit.

To add multiple shapes we can use a for loop to call append multiple times.
```javascript
{% loadfile assets/js/02/02-multi-rect.js %}
```

<div id='basic-shapes-02'>
</div>
<script src="{{ '/assets/js/02/02-multi-rect.js' | relative_url }}"></script>

However, in the spirit of data-driven design, D3.js has the ability to extract
values from an array to use as the shape parameters, as we can see below:
```javascript
{% loadfile assets/js/02/03-rect-from-data.js %}
```
<div id='basic-shapes-03'>
</div>
<script src="{{ '/assets/js/02/03-rect-from-data.js' | relative_url }}"></script>

Here we use `selectAll('rect')` to tell D3.js to select all rectangles,
even though at this point there are no rectangles. Hopefully it will 
make more sense later on. 
The next two lines are the important bits that make this work:
- `.data()` binds the selection (of all rectangles) to the array.
- `.enter()` creates a *virtual* rectangle for each element in the array,
which probably does not make much sense now either. 

Once the data is bound to the selection, and enough rectangles 
are created, the `append()` 
function will create the actual rectangles as in the previous 
examples, except this time with access to some data to set the attributes. The significance of
`enter()` (vs `exit()`) will be made clear in later sections, but for now
we can treat it as something that has to be done before we call `append()`.

To use the values in the array, we pass an anonymous function with parameter
`(d,i)`
where `d` is the array element and `i` is its index. 
In the above example, we set the y-coordinate to be the `y` value of each object in the array, where as the `x` depends on the index of the element. 

There is one more optional parameter `nodes` that refers to the DOM 
elements that are created, in this example,
an array of SVG rectangles.
In the next code below, we use `d3.select(nodes[i-1]).attr('cy')` to get the previous circle's `cy` attribute to check if the value is the same with the
current node --- darker circles mean it has the same value as the previous 
circle.

```javascript
{% loadfile assets/js/02/04-circle-from-data.js %}
```
<div id='basic-shapes-04'>
</div>
<script src="{{ '/assets/js/02/04-circle-from-data.js' | relative_url }}"></script>

We have to use `select()` because we are selecting a DOM element, and also 
we cannot directly use `cy` from `nodes[i-1]` for the same reason.
Another, possibly simpler method, is to use the values from the `data` array
using the `datum()` function like so:
```javascript
d3.select(nodes[i-1]).datum()
```
In the following code, we use `datum()` to use darker colour if a circle 
has value < 75.
```javascript
{% loadfile assets/js/02/05-circle-from-data.js %}
```
<div id='basic-shapes-05'>
</div>
<script src="{{ '/assets/js/02/05-circle-from-data.js' | relative_url }}"></script>

Now to explain why we use `selectAll()` even when there were no shapes, and
also the significance of `enter()` and `exit()`. 
When we bind data to a selection in D3.js, 
this is not a one-off process, in a sense that D3.js can detect changes
to underlying data and update the SVG accordingly. 

<div id='basic-shapes-06'>
</div>
<button type="button" class="btn" id="add-and-remove-button" onclick="add_and_remove()">Click me</button>

<div id='basic-shapes-07'>
</div>

<script src="{{ '/assets/js/02/06-enter-exit-example.js' | relative_url }}"></script>
<button type="button" class="btn" id="enter-exit-example-button" onclick="randomise()">Click me</button>



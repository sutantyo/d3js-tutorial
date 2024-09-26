---
layout: default
title: 'Title'
parent: Basic Tutorial
nav_order: 99
---

# Template

## Topic 1

Main reference: 
- [https://d3js.org/d3-selection](https://d3js.org/d3-selection){:target='_blank'}


```javascript
{% loadfile assets/js/01/select-01.js %}
```

<script src="{{ '/assets/js/01/select-01.js' | relative_url }}"></script>
<button type="button" class="btn" id="ex1" onclick="select()">Click me</button>

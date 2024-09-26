---
layout: default
title: 'Data'
parent: Basic Tutorial
nav_order: 3
---

# Data

## Loading a JSON file


```javascript
{% loadfile assets/js/03/01-basic-json-load.js %}
```
<div id="data-01" data-json-url = "{{ '/assets/json/pokemon.json' | relative_url }}">
</div>
<script src="{{ '/assets/js/03/01-basic-json-load.js' | relative_url }}"></script>
<button type="button" class="btn" id="ex1" onclick="select()">Click me</button>

---
layout: default
title: 'DOM Manipulation'
parent: Basic Tutorial
nav_order: 1
---

# DOM Manipulation



## Selection

Main reference: 
- [https://d3js.org/d3-selection](https://d3js.org/d3-selection){:target='_blank'}

To select 

```javascript
      let node = d3.select('#example').append('ul')
      for (let i = 0; i < 12; i++){
        node.append('li')
          .html('the quick brown fox jumps over the lazy dog')
          .style('font-size',16+i+'px')
          .style('color',d3.rgb(100+8*i,30+16*i,40+20*i))
          .attr('class','colourful-li')
      }
      d3.selectAll('li.colourful-li')
          .style('font-family','Helvetica')
```
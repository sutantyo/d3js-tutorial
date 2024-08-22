  var svg = d3.select("#basic-shapes-03").append("svg").attr("width", 600).attr("height", 300)
  var data = [ {x: 5, y: 18}, {x: 25, y: 83}, {x: 45, y: 43}, {x: 65, y: 90}, {x: 85, y: 110} ]

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', d => d.y)                // use y property of each object in the array
    .attr('x', (d,i) => (80 * i) + 10)  // i is the index of the object in the array
    .attr('rx', 2)     
    .attr('ry', 2) 
    .attr('width', 40)
    .attr('height',40)
    .attr('fill', d3.color('lavender'))
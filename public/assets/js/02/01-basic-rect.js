  var svg = d3.select("#basic-shapes-01").append("svg").attr("width", 200).attr("height", 200)
  svg.append('rect')
    .attr('x', 5)       // horizontal (from left) coordinate
    .attr('y', 20)      // vertical (from top) coordinate
    .attr('rx', 20)     // setting for rounded corners
    .attr('ry', 20)     // setting for rounded corners
    .attr('width', 300)
    .attr('height',200)
    .attr('stroke', d3.color('thistle')) // border colour
    .attr('stroke-width', 2)             // border thickness
    .attr('fill', d3.color('lavender'))
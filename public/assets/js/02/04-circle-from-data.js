var height = 200;
var width = 600;
var svg = d3.select("#basic-shapes-04").append("svg").attr("width", 600).attr("height", height)
var data = [ 80, 87, 95, 95, 95, 83, 65, 64, 63, 63, 63, 81, 74 ]

var gap = width / (data.length+1)

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', (d,i) => gap + i * gap) // x-coordinate
  .attr('cy', (d) => height - d)      // y-coordinate
  .attr('r', 14)                       // radius
  .attr('fill', (d,i,nodes) => {
    if (i > 0)
      return (d3.select(nodes[i]).attr('cy') == d3.select(nodes[i-1]).attr('cy')) ? d3.color('thistle') : d3.color('lavender')
    return d3.color('lavender')
  })
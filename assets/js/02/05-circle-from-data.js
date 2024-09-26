svg = d3.select("#basic-shapes-05").append("svg").attr("width", width).attr("height", height)
data = [ 80, 87, 95, 95, 95, 83, 65, 64, 63, 63, 63, 81, 74 ]

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', (d,i) => gap + i * gap) 
  .attr('cy', (d) => height - d)      
  .attr('r', 14)                      
  .attr('fill', (d,i,nodes) => {
    return (d3.select(nodes[i]).datum() > 75) ? d3.color('lavender') : d3.color('thistle');
  })
<script>
  var svg = d3.select("#rect").append("svg").attr("width", 800).attr("height", 200);
  svg.append('rect')
    .attr('x', 10)
    .attr('y', 120)
    .attr('width', 600)
    .attr('height', 40)
    .attr('stroke', 'black')
    .attr('fill', '#69a3b2');
</script>
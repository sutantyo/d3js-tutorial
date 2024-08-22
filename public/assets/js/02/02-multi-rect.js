var svg = d3.select("#basic-shapes-02").append("svg").attr("width", 600).attr("height", 300)
var height = 50;
var width = 50;
var gap = 20;
for(var i = 0; i < 5; i++)
{
    svg.append('rect')
    .attr('x', i*width + gap)       
    .attr('y', i*height + gap)      
    .attr('height',height)
    .attr('width',width)
    .attr('stroke', d3.color('thistle')) 
    .attr('stroke-width', 1)             
    .attr('fill', d3.color('lavender'))
}
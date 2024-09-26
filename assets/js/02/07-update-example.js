var svg = d3.select("#basic-shapes-07").append("svg").attr("width", width).attr("height", height)
var data = [ 80, 87, 95, 95, 95, 83, 65, 64, 63, 63, 63, 81, 74 ]
var gap = width / (data.length+1)

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', (d,i) => gap + i * gap) 
  .attr('cy', (d) => height - d)      
  .attr('r', 14)                      
  .attr('fill', 'thistle')

let randomise = () => {
  console.log("calling rando")

  for(let i = 0; i < data.length; i++){
    data[i] = data[i] -5 + Math.round(Math.random() * 10)
    if (data[i] > 100)
      data[i] = 100
    if (data[i] < 0)
      data[i] = 0
  }
  console.log(data);

  svg.selectAll('circle')
  .update()
  .attr('cx', (d,i) => gap + i * gap) 
  .attr('cy', (d) => height - d)      
  .attr('r', 14)                      
  .attr('fill', 'thistle')
}


 
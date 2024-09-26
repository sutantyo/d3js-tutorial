var svg = d3.select("#basic-shapes-06").append("svg").attr("width", 300).attr("height", 100)
var squares = [ 
  {c: "blue"}, {c: "red"}, {c: "yellow"}, {c: "purple"}
  /*
  {x: 20, y: 20, c: "blue"}, {x: 50, y: 20, c: "red"}, {x: 80, y: 20, c: "yellow"}, {x:110, y: 20, c: "purple"}, {x:140, y: 20, c:"black"}, {x:170, y: 20, c:"pink"}, {x:200, y: 20, c:"blue"}, {x:230, y:20, c:"orange"},
  {x: 20, y: 50, c: "blue"}, {x: 50, y: 50, c: "red"}, {x: 80, y: 50, c: "yellow"}, {x:110, y: 50, c: "purple"}, {x:140, y: 50, c:"black"}, {x:170, y: 50, c:"pink"}, {x:200, y: 50, c:"blue"}, {x:230, y:20, c:"orange"},
  */
]
var removed_squares = []

svg.selectAll('rect')
  .data(squares)
  .enter()
  .append('rect')
  .attr('x', (d,i) => 20 + 30 * i)
  .attr('y', 20)
  .attr('height', 25)                      
  .attr('width', 25)                      
  .attr('rx',3)
  .attr('ry',3)
  .attr('fill', (d) => d.c)

let rand = (x) => Math.floor(Math.random() * x)

let add_and_remove = () => {
  console.log("add and remove called")
  // Choose 1-3 randomly as the number of squares to remove
  let n = rand(Math.min(3, data.length)) + 1;

  for(let i = 0; i < n; i++){
    let idx_to_remove = rand(squares.length)
    console.log("remove " + idx_to_remove + " out of " + squares.length)
    removed_squares.push(squares[i])
    squares.splice(idx_to_remove, 1)
  }

  console.log(squares)

  svg.selectAll('rect')
  .data(squares)
  .exit()
  .remove()
}


 
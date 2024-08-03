var color = 'red';

function select(){
  console.log('select clicked');
  if (color == 'red')
    color = 'blue';
  else 
    color = 'red';
  d3.select('#ex1').style('color',d3.color(color))
}
// start slingin' some d3 here.
d3.select("body")
  .append("svg")
  .attr('width', 1200)
  .attr('height', 1200)




  var createEnemies = function(n) {

    var enemies = []; 
    for (var i = 0; i < n; i++) {
      enemies[i] = {};
      enemies[i].iD = i;
      enemies[i].cx = Math.random() * 500;
      enemies[i].cy = Math.random() * 500;
      enemies[i].r = 5;
    }
    return enemies;
}

var enemies = createEnemies(30);

d3.select("svg").selectAll("circle")
  .data(enemies, function(e) {
    return e.iD
  })
  .enter()
  .append("svg:circle")
  .attr("cx", function(circle) {
    return circle.cx
  })
  .attr("cy", function(circle) {
    return circle.cy
  })
  .attr("r", function(circle) {
    return circle.r
  })
  .style("fill", "purple")


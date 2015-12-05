// start slingin' some d3 here.
var randomizer = 500;
var width = randomizer;
var height = randomizer;

d3.select("body")
  .append("svg")
  .attr('width', randomizer)
  .attr('height', randomizer)




  var createEnemies = function(n) {

    var enemies = []; 
    for (var i = 0; i < n; i++) {
      enemies[i] = {};
      enemies[i].iD = i;
      enemies[i].cx = Math.random() * randomizer;
      enemies[i].cy = Math.random() * randomizer;
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
  .attr("class", "enemy")
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


//setTimeout with move
 var setRandom = function() {
    var number = Math.random();
    return number;
}
//create function definition for move
//add 

var move = function() {
    d3.selectAll("circle")
    .data(enemies)
    .transition().duration(1000)
    //This is once per tween
    .tween("attr", function() {
        //This is n times per tween
        return function() {
          return checkCollision(d3.select(this));
        }
      })
    .attr({
      cx: function(circle) {return Math.random() * randomizer},
      cy: function(circle) {return Math.random()* randomizer}
    })
    

 }

var checkCollision = function(enemy) {

  var radiiSum =  15;
  //console.log("enemy cx", enemy.cx, 'enemy cy:', enemy.cy);
  var xDiff = enemy.attr('cx') - person.attr('cx')
  var yDiff = enemy.attr('cy') - person.attr('cy')

  var difference = Math.sqrt( Math.pow(xDiff,2) + Math.pow(yDiff,2) );
  
      if (difference < radiiSum) {
        //updateBestScore();
      } 
};

// var updateBestScore = function() {
//   d3.select(".highscore").selectAll("span")
//       .text(function(number) {
        
//         if (currentScore > number) {
//           return currentScore
//         } else {
//           currentScore = 0
//           return currentScore
//         }
//       })
// }

var scoreData = {
  currentScore : 0,
  currentHigh: 0,
  collision: false
}

var count = function() {
    d3.select(".current").selectAll("span")
      .data([scoreData]) 
      .text(function(d) {
        return d.currentScore++;
      })
}
//assume we have reference to endPosition in endData
// var collisionKing = function( endData) {
//   //create var for enemy , perhaps (this) ?
//   var startPosition = {
//     x: parseFloat(enemy.attr('cx'))
//     y: parseFloat(enemy.attr('cy')); 
//   };
//   var endPosition = {
//     x: axes.x(endData.x);
//     y: axes.y(endData.y)
//   }
// };
//   (t) will be ticks  between transitions, our transition is 1000 ms, hence our t is timestep. t is time passed over total transition time
//   invoke check collision here? 

//   var enemyNextPos = {
//     x: startPosition.x + (endPosition.x - startPosition.x)*t;
//     y: startPosition.y + (endPosition.y - startPosition.y)*t;
//   }

//   enemy.attr({
//     'cx': enemyNextPos.x,
//     'cy': enemyNextPos.y
//   })

//   //do the transition
//   //call .tween("custom",collisionKing) 
// }
  


var player = [{
  cx: width/2, 
  cy: height/2, 
  r: 10   
}]

// var drag = d3.behavior.drag().on('dragstart', function (d) {
//   console.log("Started moving item with data:", d);
// });


var drag = d3.behavior.drag()
  .on('drag', function() {
    person.attr({
      "cx": d3.event.x,
      "cy": d3.event.y
    })
  })




var person = d3.select("svg")
  .data(player)
  .append("svg:circle")
  .attr("class", "player")
  .attr("cx", player[0].cx)
  .attr("cy", player[0].cy)
  .attr("r", player[0].r)
  .style("fill", "red")
  .call(drag)
  


move();
setInterval(move, 1000);
console.log(d3.select(".currentScore"))
console.log(d3.select(".current").selectAll("span"))

count();
setInterval(count, 400)
/*

var count = function() {
  if collision () {
    compare current score to high score
    change high score if necessary
    reset current score
    return 
  } else {
    increase current score
    return;
  }
}
  
setTimeout(count, 500ms)
  //loop through all our circles
  //change x and y
  //transition with a certain time

  //loop through each enemy
    //transition and translation from x1 and y1 to x2 and y2
    //within set time

  //MOVING FUNCTIONALITY FOR ALL ENEMIES
  /*
  attr('cy', function(c) {
    var newY = Math.random() * 1000
    c.y = newY
  })
  attr(cx', function(c) {
    var newX = Math.random() * 1000
    c.x = newX
  })
  transition().duration(1000);

  setInterval()

  INPUTS
    circle ids
      access x and y

  OUTPUT
    circle ids
      x and y will change to new random location (maybe use Math.random directly)
      Circle moves from point a to point b within 2 seconds

  .transition (1 milliseconds)
  .translation (look this up)

  setInterval for every 1 second

*/


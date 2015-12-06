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
      enemies[i].x = Math.random() * randomizer;
      enemies[i].y = Math.random() * randomizer;
      enemies[i].r = 5;
      enemies[i].angle = 0;
    }
    return enemies;
}

var enemies = createEnemies(10);

d3.select("svg").selectAll("image")

  .data(enemies, function(e) {
    return e.iD
  })
  .enter()
  .append("svg:image")
  .attr("class", "enemy")
  .attr("x", function(image) {
    return image.x
  })
  .attr("y", function(image) {
    return image.y
  })
  // .attr("r", function(image) {
  //   return image.r
  // })
  .attr('height', '50')
  .attr('width', '50')
  .attr('xlink:href', 'http://d2rormqr1qwzpz.cloudfront.net/photos/2015/02/20/73426-thorhammer.jpg')
  


//setTimeout with move
 var setRandom = function() {
    var number = Math.random();
    return number;
}
//create function definition for move
//add 

var move = function() {
    d3.selectAll("image")
    .data(enemies)
    // .attr("transform", function(d) {
    //   return rotate(d.angle+30)
    // })
    .transition().duration(1000)
    //This is once per tween
    .tween("attr", function() {
        //This is n times per tween
        return function() {
          return checkCollision(d3.select(this));
        }
      })
    .attr({
      x: function(image) {return Math.random() * randomizer},
      y: function(image) {return Math.random()* randomizer}
    })
    
//set boolean for detecting colision (and update collision score)    
// d3.select(".collisions").selectAll("span")
//       .data([scoreData])
//       .text(function(d) {
//         return d.collisions++;
//       })
//       } 
 }
var startAngle = [0];
var checkCollision = function(enemy) {

  var radiiSum =  15;
  //console.log("enemy x", enemy.x, 'enemy y:', enemy.y);
  var xDiff = enemy.attr('x') - person.attr('x')
  var yDiff = enemy.attr('y') - person.attr('y')

  var difference = Math.sqrt( Math.pow(xDiff,2) + Math.pow(yDiff,2) );
  
      if (difference < radiiSum) {
        updateBestScore();
        d3.select(".player").selectAll("span")
          .data(["I've been hit"])
          .enter()
          .append("span")
          .text(function(d) {
            return d;
          })


      }
}

var updateBestScore = function() {
  scoreData.currentHigh = Math.max(scoreData.currentScore, scoreData.currentHigh)
  d3.select(".highscore").selectAll("span")
    .data([scoreData])
    .text(function(d) {
      return d.currentHigh 
    })
    //     var max = Math.max(scoreData.currentScore, scoreData.currentHigh)
    //     console.log('max now:', max);
    //     return max;
    //   })
  scoreData.currentScore = 0;
 
};

var scoreData = {
  currentScore : 0,
  currentHigh: 0,
  collisions: 0
}

var count = function() {
    d3.select(".current").selectAll("span")
      .data([scoreData]) 
      .text(function(d) {
        return d.currentScore++
      })
}
//assume we have reference to endPosition in endData
// var collisionKing = function( endData) {
//   //create var for enemy , perhaps (this) ?
//   var startPosition = {
//     x: parseFloat(enemy.attr('x'))
//     y: parseFloat(enemy.attr('y')); 
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
//     'x': enemyNextPos.x,
//     'y': enemyNextPos.y
//   })

//   //do the transition
//   //call .tween("custom",collisionKing) 
// }
  


var player = [{
  x: width/2, 
  y: height/2, 
  r: 10   
}]

// var drag = d3.behavior.drag().on('dragstart', function (d) {
//   console.log("Started moving item with data:", d);
// });


var drag = d3.behavior.drag()
  .on('drag', function() {
    person.attr({
      "x": d3.event.x,
      "y": d3.event.y
    })
  })




var person = d3.select("svg")
  .data(player)
  .append("svg:image")
  
  .attr("class", "player")
  .attr("x", player[0].x)
  .attr("y", player[0].y)
  .attr("width", "75")
  .attr("height", "75")
  .attr("xlink:href", "http://www.geekalerts.com/u/Thor-Sixth-Scale-Action-Figure.jpg")
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
  //loop through all our images
  //change x and y
  //transition with a certain time

  //loop through each enemy
    //transition and translation from x1 and y1 to x2 and y2
    //within set time

  //MOVING FUNCTIONALITY FOR ALL ENEMIES
  /*
  attr('y', function(c) {
    var newY = Math.random() * 1000
    c.y = newY
  })
  attr(x', function(c) {
    var newX = Math.random() * 1000
    c.x = newX
  })
  transition().duration(1000);

  setInterval()

  INPUTS
    img ids
      access x and y

  OUTPUT
    circle ids
      x and y will change to new random location (maybe use Math.random directly)
      Circle moves from point a to point b within 2 seconds

  .transition (1 milliseconds)
  .translation (look this up)

  setInterval for every 1 second

*/


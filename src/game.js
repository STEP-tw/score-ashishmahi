const Game = function(numberOfRows,numberOfCols){
  this.rows = numberOfRows;
  this.cols = numberOfCols;
  this.snake = {};
  this.food ={};
  this.score=0;
}

Game.prototype.addSnake = function (snake) {
  this.snake = snake;
};

Game.prototype.updateScore = function () {
  this.score++;
};

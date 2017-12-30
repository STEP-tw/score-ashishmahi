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
  this.increaseScoreBy(10);
};

Game.prototype.increaseScoreBy = function (number) {
  this.score+=number;
};
Game.prototype.createFood=function(numberOfRows,numberOfCols) {
  this.food=generateRandomPosition(numberOfCols,numberOfRows);
}

Game.prototype.createAndAddSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();
  let snake=new Snake(head,body);
  this.addSnake(snake);
}

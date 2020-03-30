var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "find pollen";
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.canFly = true;
ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}
ForagerBee.prototype.constructor = ForagerBee;


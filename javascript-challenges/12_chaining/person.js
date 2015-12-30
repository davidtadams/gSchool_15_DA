module.exports = function(name, weight) {
  this.name = name;
  this.weight = weight;
  this.eat = function() {
    this.weight += 1;
    return this;
  }
}

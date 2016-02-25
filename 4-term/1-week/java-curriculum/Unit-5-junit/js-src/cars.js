var Car = function (mpg) {
  this.mpg = mpg;
  this.gallons = 0;
  this.odometer = 0;
  this.trips = [];
};

Car.prototype.fill = function(gallons){
  this.gallons += gallons;
}

Car.prototype.drive = function(miles){
  this.gallons -= miles / this.mpg;
  this.odometer += miles;
  this.trips.push(miles + ' miles');
}

module.exports = Car;

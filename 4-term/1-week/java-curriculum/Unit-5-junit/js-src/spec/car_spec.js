var Car = require('../cars');

describe('Car', function() {

  describe("#fill", function() {
    it("gives the car gas", function() {
      var car = new Car(10);
      expect(car.gallons).toEqual(0);

      car.fill(5);
      expect(car.gallons).toEqual(5);

      car.fill(6);
      expect(car.gallons).toEqual(11);
    });
  });

  it("uses gas when driving", function() {
    var car = new Car(10);
    car.fill(10);
    expect(car.gallons).toEqual(10);
    car.drive(50);
    expect(car.gallons).toEqual(5);
  });

  it("increments the odometer when driving", function() {
    var car = new Car(10);
    expect(car.odometer).toEqual(0);
    car.drive(50);
    expect(car.odometer).toEqual(50);
    car.drive(25);
    expect(car.odometer).toEqual(75);
  });

  it("records trips", function() {
    var car = new Car(10);
    expect(car.trips).toEqual([]);
    car.drive(50);
    expect(car.trips).toEqual([
      '50 miles'
    ]);
    car.drive(25);
    expect(car.trips).toEqual([
      '50 miles',
      '25 miles',
    ]);
  });

});

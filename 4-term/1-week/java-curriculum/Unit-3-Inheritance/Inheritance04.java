package galvanize;

class Adder {
  int x;
  int y;

  Adder(int x, int y) {
    this.x = x;
    this.y = y;
  }

  int add() {
    return this.x + this.y;
  }
}

class Subtractor {
  int x;
  int y;

  Subtractor(int x, int y) {
    this.x = x;
    this.y = y;
  }

  int subtract() {
    return this.x - this.y;
  }
}

class Multiplier {
  int x;
  int y;

  Multiplier(int x, int y) {
    this.x = x;
    this.y = y;
  }

  int multiply() {
    return this.x * this.y;
  }
}

class Inheritance04 {
  public static void main(String[] args){
    Adder adder = new Adder(5, 1);
    System.out.println(adder.add());

    Subtractor subtractor = new Subtractor(5, 1);
    System.out.println(subtractor.subtract());

    Multiplier multiplier = new Multiplier(5, 1);
    System.out.println(multiplier.multiply());
  }
}

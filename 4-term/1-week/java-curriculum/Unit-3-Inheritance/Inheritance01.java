package galvanize;

class Person {

  public void printName(String first, String last) {
    System.out.println(first + " " + last);
  }

}

class Inheritance01 {
  public static void main(String[] args){
    Person person = new Person();

    person.printName("Ed", "Eades");
  }
}

package galvanize;

class Employee {
  String status = "employed";

  String getStatus() {
    return "This person is " + status;
  }
}

class Manager {
  String status = "employed";

  String getStatus() {
    return "This person is " + status;
  }
}

class Inheritance02 {
  public static void main(String[] args){
    Employee employee = new Employee();
    System.out.println(employee.status);
    System.out.println(employee.getStatus());

    Manager manager = new Manager();
    System.out.println(employee.status);
    System.out.println(employee.getStatus());
  }
}

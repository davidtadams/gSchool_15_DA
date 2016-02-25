package galvanize;

class Employee {
  String status = "employed";

  String getStatus() {
    return "This employee is " + status;
  }
}

class Manager extends Employee {
}

class Inheritance03 {
  public static void main(String[] args){
    Employee employee = new Employee();
    System.out.println(employee.status);
    System.out.println(employee.getStatus());

    Manager manager = new Manager();
    System.out.println(manager.status);
    System.out.println(manager.getStatus());
  }
}

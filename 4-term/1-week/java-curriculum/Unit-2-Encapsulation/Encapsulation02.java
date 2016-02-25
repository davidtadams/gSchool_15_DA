package galvanize;

class Proposal {
  String name = "";
}

class Encapsulation02 {
  public static void main(String[] args){
    Proposal prop = new Proposal();
    prop.name = "Some thing";
    System.out.println(prop.name);
  }
}

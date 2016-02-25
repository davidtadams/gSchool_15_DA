package galvanize;

class Proposal {
  String name = "";
  private int allInFavor = 0;
}

class Encapsulation01 {
  public static void main(String[] args){
    Proposal prop = new Proposal();
    prop.name = "Some thing";
    System.out.println(prop.name);

    prop.allInFavor = 24;
    System.out.println(prop.allInFavor);
  }
}

package galvanize;

class JSONImporter {
  void importJSON(){
    System.out.println("Importing JSON");
  }
}

class XMLImporter {
  void importXML(){
    System.out.println("Importing XML");
  }
}

class CSVImporter {
  void importCSV(){
    System.out.println("Importing CSV");
  }
}

class Runner {
  void run(Object o) {
    if (o instanceof JSONImporter) {
      ((JSONImporter) o).importJSON();
    } else if (o instanceof XMLImporter) {
      ((XMLImporter) o).importXML();
    } else if (o instanceof CSVImporter) {
      ((CSVImporter) o).importCSV();
    }
  }
}

class Polymorphism01 {
  public static void main(String[] args){
    Runner runner = new Runner();
    runner.run(new JSONImporter());
    runner.run(new XMLImporter());
    runner.run(new CSVImporter());
  }
}

package main;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

import java.io.*;
import java.util.*;

public class GraphTest {

  public ArrayList<String> readFile (String filename) {
    ArrayList<String> lines = new ArrayList<String>();
    String line = null;
    try {
      FileReader fileReader = new FileReader(filename);
      BufferedReader bufferedReader = new BufferedReader(fileReader);
      while((line = bufferedReader.readLine()) != null) {
        lines.add(line);
      }
      bufferedReader.close();
    }
    catch(FileNotFoundException ex) {
      System.out.println("Unable to open file '" + filename + "'");
    }
    catch(IOException ex) {
      ex.printStackTrace();
    }
    return lines;
  }

  public Graph readGraph (String filename) {
    Graph graph = new Graph();
    ArrayList<String> lines = readFile(filename);
    for (String line : lines) {
      String[] fields = line.split(",");
      graph.addNode(fields[0]);
      graph.addNode(fields[1]);
      graph.addEdge(fields[0], fields[1], Integer.parseInt(fields[2]));
    }
    return graph;
  }

  // @Test
  // public void ShouldPrint() {
  //   Graph cityGraph = readGraph("./src/test/fixture/cityGraph.txt");
  //   cityGraph.print();
  // }
  //
  // @Test
  // public void ShouldGetSize () {
  //   Graph cityGraph = readGraph("./src/test/fixture/cityGraph.txt");
  //   Assert.assertEquals(7, cityGraph.size());
  // }
  //
  // @Test
  // public void ShouldGetNumEdges () {
  //   Graph cityGraph = readGraph("./src/test/fixture/cityGraph.txt");
  //   Assert.assertEquals(10, cityGraph.numEdges());
  // }
  //
  // @Test
  // public void ShouldGetWeight () {
  //   Graph cityGraph = readGraph("./src/test/fixture/cityGraph.txt");
  //   Assert.assertEquals(8750, cityGraph.weight());
  // }
  //
  // @Test
  // public void ShouldGetNeighbors () {
  //   Graph cityGraph = readGraph("./src/test/fixture/cityGraph.txt");
  //   ArrayList<String> neighbors = cityGraph.findNeighbors("Chicago");
  //   Assert.assertEquals(3, neighbors.size());
  //   Assert.assertEquals(true, neighbors.contains("Denver"));
  //   Assert.assertEquals(true, neighbors.contains("Atlanta"));
  //   Assert.assertEquals(true, neighbors.contains("Nashville"));
  // }
  //
  // @Test
  // public void ShouldFindShortestPath () {
  //   Graph cityGraph = readGraph("./src/test/fixture/cityGraph.txt");
  //   ArrayList<Graph.GraphEdge> path = cityGraph.findPath("Seattle", "Nashville");
  //   Assert.assertEquals(2, path.size());
  //   // Seattle -> Denver -> Nashville
  //   Assert.assertEquals(path.get(0).first.value, "Denver");
  //   Assert.assertEquals(path.get(0).second.value, "Seattle");
  //   Assert.assertEquals(path.get(1).first.value, "Nashville");
  //   Assert.assertEquals(path.get(1).second.value, "Denver");
  //   Assert.assertEquals(Graph.pathWeight(path), 2474);
  // }
  //
  // @Test
  // public void ShouldGetOrphans () {
  //   Graph graph = new Graph();
  //   // A <-> B   C
  //   graph.addNode("A");
  //   graph.addNode("B");
  //   graph.addNode("C");
  //   graph.addEdge("A", "B", 10);
  //   ArrayList<Graph.GraphNode> orphans = graph.findOrphans();
  //   Assert.assertEquals(1, orphans.size());
  //   Assert.assertEquals(true, orphans.contains("C"));
  // }

}

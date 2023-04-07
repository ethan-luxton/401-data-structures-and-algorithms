const { Graph } = require('../graph/c35_graph');
const graphBreadthFirst = require('./c36-graph-breadthfirst');

describe('Graph', () => {
    let graph;
  
    beforeEach(() => {
      graph = new Graph(false);
    });

    test('Simplest Case', () => {
        const nodeA = graph.addNode("A");
        const nodeB = graph.addNode("B");
        graph.addEdge(nodeA, nodeB, 5);
        expect(graphBreadthFirst(graph, nodeA)).toEqual(["A", "B"]);
    });

    test('Complex test of the breadth first traversal', () => {       
        const nodeE = graph.addNode("E");
        const nodeC = graph.addNode("C");
        const nodeG = graph.addNode("G");
        const nodeA = graph.addNode("A");
        const nodeF = graph.addNode("F");
        const nodeB = graph.addNode("B");
        const nodeI = graph.addNode("I");
        const nodeD = graph.addNode("D");
        const nodeH = graph.addNode("H");
        graph.addEdge(nodeA, nodeC, 5);
        graph.addEdge(nodeB, nodeE, 10);
        graph.addEdge(nodeC, nodeG, 7);
        graph.addEdge(nodeD, nodeF, 12);
        graph.addEdge(nodeE, nodeH, 8);
        graph.addEdge(nodeF, nodeA, 15);
        graph.addEdge(nodeG, nodeB, 3);
        graph.addEdge(nodeH, nodeI, 6);
        graph.addEdge(nodeI, nodeD, 4);
        graph.addEdge(nodeC, nodeF, 9);
        expect(graphBreadthFirst(graph, nodeA)).toEqual(["A", "C", "F", "G", "D", "B", "I", "E", "H"]);
      });

      test('Empty case', () => {  
        expect(graphBreadthFirst(graph)).toEqual([]);
      });
      
  });
const { Graph, Node, Edge } = require('./c35_graph');

describe('Graph', () => {
    let graph;
  
    beforeEach(() => {
      graph = new Graph(false);
    });
  
    test('Node can be successfully added to the graph', () => {       
        const nodeA = graph.addNode("A");
        expect(graph.getNodes()).toContain(nodeA);
      });
      
      test('An edge can be successfully added to the graph', () => {
        const nodeA = graph.addNode("A");
        const nodeB = graph.addNode("B");
        graph.addEdge(nodeA, nodeB, 5);
        expect(graph.getNeighbors(nodeA)).toContainEqual({ node: nodeB, value: 5 });
      });
      
      test('A collection of all nodes can be properly retrieved from the graph', () => {  
        const nodeA = graph.addNode("A");
        const nodeB = graph.addNode("B");
        expect(graph.getNodes()).toEqual(new Set([nodeA, nodeB]));
      });
      
      test('All appropriate neighbors can be retrieved from the graph', () => {       
        const nodeA = graph.addNode("A");
        const nodeB = graph.addNode("B");
        const nodeC = graph.addNode("C");
        graph.addEdge(nodeA, nodeB, 5);
        graph.addEdge(nodeA, nodeC, 10);
        expect(graph.getNeighbors(nodeA)).toEqual([{ node: nodeB, value: 5 }, { node: nodeC, value: 10 }]);
      });
      
      test('Neighbors are returned with the weight between nodes included', () => {       
        const nodeA = graph.addNode("A");
        const nodeB = graph.addNode("B");
        graph.addEdge(nodeA, nodeB, 5);
        expect(graph.getNeighbors(nodeA)).toContainEqual({ node: nodeB, value: 5 });
      });
      
      test('The proper size is returned, representing the number of nodes in the graph', () => {  
        graph.addNode("A");
        graph.addNode("B");
        expect(graph.getSize()).toBe(2);
      });
      
      test('A graph with only one node and edge can be properly returned', () => {     
        const nodeA = graph.addNode("A");
        const nodeB = graph.addNode("B");
        graph.addEdge(nodeA, nodeB, 5);
        expect(graph.getNodes()).toEqual(new Set([nodeA, nodeB]));
        expect(graph.getNeighbors(nodeA)).toEqual([{ node: nodeB, value: 5 }]);
        expect(graph.getNeighbors(nodeB)).toEqual([{ node: nodeA, value: 5 }]); 
    });
  });
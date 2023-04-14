const { Graph, Node, Edge } = require('../graph/c35_graph');
const { depthFirstTraversal } = require('./c38-graph-depthfirst');

describe('depthFirstTraversal', () => {
    test('returns correct traversal order starting from top node [A, C, G, B, E, H, F, D]', () => {
        const letters = new Graph(false);
        const nodes = 'ABCDEFGH'.split('').map(letter => letters.addNode(letter));

        letters.addEdge(nodes[0], nodes[1]);
        letters.addEdge(nodes[0], nodes[2]);
        letters.addEdge(nodes[2], nodes[6]);
        letters.addEdge(nodes[1], nodes[3]);
        letters.addEdge(nodes[1], nodes[4]);
        letters.addEdge(nodes[4], nodes[5]);
        letters.addEdge(nodes[4], nodes[7]);

        const traversalResult = depthFirstTraversal(letters, nodes[0]);
        const expectedResult = ['A', 'C', 'G', 'B', 'E', 'H', 'F', 'D'];

        expect(traversalResult.map(node => node.value)).toEqual(expectedResult);
    });

    test('returns correct traversal order starting from bottom node [G, C, A, B, E, H, F, D]', () => {
        const letters = new Graph(false);
        const nodes = 'ABCDEFGH'.split('').map(letter => letters.addNode(letter));

        letters.addEdge(nodes[0], nodes[1]);
        letters.addEdge(nodes[1], nodes[2]);
        letters.addEdge(nodes[2], nodes[6]);
        letters.addEdge(nodes[1], nodes[3]);
        letters.addEdge(nodes[1], nodes[4]);
        letters.addEdge(nodes[4], nodes[5]);
        letters.addEdge(nodes[4], nodes[7]);

        const traversalResult = depthFirstTraversal(letters, nodes[6]);
        const expectedResult = ['G', 'C', 'B', 'E', 'H', 'F', 'D', 'A'];

        expect(traversalResult.map(node => node.value)).toEqual(expectedResult);
    });
    test('returns correct traversal order (short test) [A, B, C]', () => {
        const letters = new Graph(false);
        const nodes = 'ABC'.split('').map(letter => letters.addNode(letter));

        letters.addEdge(nodes[0], nodes[1]);
        letters.addEdge(nodes[1], nodes[2]);
        

        const traversalResult = depthFirstTraversal(letters, nodes[0]);
        const expectedResult = ['A', 'B', 'C'];

        expect(traversalResult.map(node => node.value)).toEqual(expectedResult);
    });
});

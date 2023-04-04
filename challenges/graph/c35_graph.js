class Node {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(from, to, value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
}

class Graph {
    constructor(directed) {
        this.nodeSet = new Set();
        this.edges = new Map();
        this.directed = directed;
        this.adjacencyList = new Map();
    }
    addNode(value) {
        const node = new Node(value);
        this.nodeSet.add(node); 
        this.adjacencyList.set(node, []);
        return node; 
    }
    addEdge(src, dest, val) {
        const edge = new Edge(src, dest, val);
        const edges = this.edges.get(src) ?? [];
        edges.push(edge);
        this.edges.set(src, edges);
        if (!this.directed) {
            const reverseEdge = new Edge(dest, src, val);
            const reverseEdges = this.edges.get(dest) ?? [];
            reverseEdges.push(reverseEdge);
            this.edges.set(dest, reverseEdges);
        }
        return edge;
    }
    getNodes() {
        return this.nodeSet;
    }
    getNeighbors(node) {
        const edges = this.edges.get(node) ?? [];
        return edges.map(edge => ({ node: edge.to, value: edge.value }));
    }
    getSize() {
        return this.nodeSet.size;
    }
}


module.exports = {Graph, Node, Edge}
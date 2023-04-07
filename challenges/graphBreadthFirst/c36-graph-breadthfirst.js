function graphBreadthFirst (graph, startingNode) {
    const visited = new Set()
    const result = [];

    if (!startingNode) {
        return result;
    }

    const queue = [startingNode]
    visited.add(startingNode)
    
    while (queue.length) {
        const node = queue.shift()
        result.push(node.value)
        for (neighbor of graph.getNeighbors(node)) {
            if(!visited.has(neighbor.node)) {
                visited.add(neighbor.node);
                queue.push(neighbor.node);
            };
        }
    }
    return result;
}

module.exports = graphBreadthFirst